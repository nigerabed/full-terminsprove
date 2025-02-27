import Link from "next/link";
import { cookies } from "next/headers";

export default async function KalenderCard({ kalenderData }) {
  const cookieStore = await cookies();
  const role = cookieStore.get("landrup_role");
 

  return (
    <>
      {!kalenderData || kalenderData.length < 1 ? (
        <div className="bg-white w-[90%] flex flex-col justify-center items-start h-[9em] mt-[2em] pl-[1em] rounded-lg ">
          No Activites available for this user
        </div>
      ) : (
        <div>
          {kalenderData.map((activity) => (
            <>
              {role.value.includes("instructor") ? (
                   <Link href={`/kalender/${activity.id}`}>
                      <div
                  key={activity.id}
                  className="bg-white w-[90%] flex flex-col justify-center items-start h-[9em] mt-[2em] pl-[1em] rounded-lg"
                >
                  <div className="text-black font-semibold text-[2.5em] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                    {activity.name}
                  </div>
                  <div className="font-semibold text-xl ">
                    {activity.weekday} {activity.time}
                  </div>
                </div>
                </Link>
              ) : (<>
              <Link href={`/activitier/${activity.id}`}>
              <div
                  key={activity.id}
                  className="bg-white w-[90%] flex flex-col justify-center items-start h-[9em] mt-[2em] pl-[1em] rounded-lg"
                  >
                  <div className="text-black font-semibold text-[2.5em] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                    {activity.name}
                  </div>
                  <div className="font-semibold text-xl ">
                    {activity.weekday} {activity.time}
                  </div>
                </div>
                  </Link>
              </>)}
            </>
          ))}
        </div>
      )}
    </>
  );
}
