
export default async function KalenderCard({ kalenderData }) {


  return (
    <>
      {!kalenderData || kalenderData.length < 1 ? (
        <div  className="bg-white w-[90%] flex flex-col justify-center items-start h-[9em] mt-[2em] pl-[1em] rounded-lg ">
            No Activites available for this user
            </div>
      ) : (
        <div>
          {kalenderData.map((activity) => (
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
          ))}
        </div>
      )}
    </>
  );
}
