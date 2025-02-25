import Footer from "@/components/Footer";
import KalenderCard from "@/components/KalenderCard";
import PageHeader from "@/components/PageHeader";
import { cookies } from "next/headers";

export default async function kalender() {
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userId = cookieStore.get("landrup_userid");
  const role = cookieStore.get("landrup_role");

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;

  let kalenderData;

  if (role.value === "default") {
    /*
       when user role is default
       fetch user activies from user api
    */
    const res = await fetch(`${baseUrl}/api/v1/users/${userId.value}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.value,
      },
    });
    //console.log("res", res);
    const userData = await res.json();

    kalenderData =  userData.activities.map(activity => {
      return {
        id: activity.id,
        name: activity.name,
        description: activity.description,
        weekday: activity.weekday,
        time: activity.time,
      };
    });
  //  console.log(kalenderData);
  } else if (role.value === "instructor") {
    /*
       when user role is instructor
       then fetch activies from actives api then filter by instructor id
    */
    const res = await fetch(`${baseUrl}/api/v1/activities`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token.value,
      },
    });
    const activitiesData = await res.json();

    const filteredActivitesByInstructor = activitiesData.filter(activity=>activity.instructorId == userId.value);

    kalenderData =  filteredActivitesByInstructor.map(activity=>{
      return {
        id: activity.id,
        name: activity.name,
        description: activity.description,
        weekday: activity.weekday,
        time: activity.time,
      };

    });
    //console.log("activitiesData", activitiesData);
    //console.log("filteredActivitesByInstructor", filteredActivitesByInstructor);
    //console.log("kalenderData", kalenderData);
  }

  return (
    <>
      <PageHeader indhold={"Kalender"} />
      {role.value === "instructor" ? (
        <div  className="text-white font-semibold text-[2.5em] overflow-hidden text-ellipsis whitespace-nowrap w-full">Logind som instructor</div>
      ) : (
        <div  className="text-white font-semibold text-[2.5em] overflow-hidden text-ellipsis whitespace-nowrap w-full">Logind som bruger</div>
      )}


      <div className="flex flex-col justify-center items-center">
        
        <KalenderCard kalenderData={kalenderData} />
      </div>
        <Footer />
    </>
  );
}
