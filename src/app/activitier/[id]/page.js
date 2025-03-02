
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import TidmeldButton from "@/components/TidmeldButton";
import { serverFetch, serverFetchWithAuth } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import Image from "next/image";

export async function generateMetadata({ params }, parent) {
  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  const id = (await params).id;
  const activity = await serverFetch(`${baseUrl}/api/v1/activities/${id}`);
  return {
    title: activity.name,
    description: activity.description,
  };
}

export default async function ActivityDetails({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  console.log(baseUrl)

  const cookieStore = await cookies();

  const activityId = (await params).id;

  const data = await serverFetch(`${baseUrl}/api/v1/activities/${activityId}`);
  console.log("dataaaaaaaaaaaa", data);

  const url = data.asset.url;
  const newUrl = baseUrl + url.slice("http://localhost:4000".length);

  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  const role = cookieStore.get("landrup_role");
  let isTilmeldt = false;

  if (userId && token) {
    // serverFetchWithAuth this function fetch data with api and token ( jeg har brught den function i
    // tilmeld activityDetails fordi skal jeg brug user api med token)

    const userData = await serverFetchWithAuth(
      `${baseUrl}/api/v1/users/${userId.value}`,
      token.value
    );

    const tilmeldtActivity = userData.activities.filter(
      (act) => activityId == act.id
    );

    if (tilmeldtActivity.length > 0) {
      isTilmeldt = true;
    }
  }

  return (
    <>
      <section>
        <div className="relative">
          <Image
            src={newUrl}
            alt="activity"
            width={250}
            height={150}
            className="h-[30em] w-full object-cover"
          />

          {role && role.value === "instructor" ? (
            <></>
          ) : 
            <TidmeldButton activityId={activityId} isTilmeldt={isTilmeldt} />
          }
        </div>
        <div className="p-[2em]">
          <h2 className="text-white text-[1.9em] font-semibold">{data.name}</h2>
          <div className="text-white text-[1.4em]">
            {data.minAge}-{data.maxAge} år
            <p className="text-[18px]">{data.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
