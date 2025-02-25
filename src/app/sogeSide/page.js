import PageHeader from "@/components/PageHeader";

import { serverFetch } from "@/lib/server-fetch";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";
import SearchField from "@/components/SearchFeield";

export const metadata = {
  title: "Søge",
  description: "Søge activitere here.",
};

export default async function SogeSide({ searchParams }) {
  let searchedText = searchParams.search;

  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;
  const allActivities = await serverFetch( `${baseUrl}/api/v1/activities`);
  let activityList = [];

  if(searchedText){
    // i have to filter the allActivities

    // filter by name
    const filterListbyName = allActivities.filter(activity=> activity.name.toLowerCase().includes(searchedText.toLowerCase()));
    
    // filter by weeek
    const filterListByWeek = allActivities.filter(activity=> activity.weekday.toLowerCase().includes(searchedText.toLowerCase()));

    activityList = [...filterListbyName, ...filterListByWeek]

  }else{
    activityList = [...allActivities];
  }

  return (
    <>
      <section className="pb-[5em]">
        <PageHeader indhold={<h1 className="text-[1em] text-white">Søg</h1>} />
        <SearchField />
        <ul>
          {activityList.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
