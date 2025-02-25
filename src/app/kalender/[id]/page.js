import PageHeader from "@/components/PageHeader";
import { serverFetch, serverFetchWithAuth } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function KalenderDetails({ params }) {
  const baseUrl = process.env.NEXT_PUBLIC_LANDRUP_API_BASE_URL;

  const kalenderActivityId = (await params).id;
  const cookieStore = await cookies();
  const userId = cookieStore.get("landrup_userid");
  const token = cookieStore.get("landrup_token");
  const role = cookieStore.get("landrup_role");

  if (role.value !== "instructor") {
    redirect("/login");
  }

  const data = await serverFetchWithAuth(
    `http://localhost:4000/api/v1/users/${userId.value}/roster/${kalenderActivityId}`,
    token.value
  );

  return (
    <>
      <PageHeader indhold={data.name} />
      {data.map((user) => (
        <>
          <div>
            {user.firstname} {user.lastname}
          </div>
        </>
      ))}
    </>
  );
}
