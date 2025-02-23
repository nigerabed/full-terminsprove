import UserRegistrationForm from "@/components/UserRegistrationForm";

export const metadata = {
    title: "New User Registration",
    description: "Brugere logind here.",
  };
  

export default async function NewRegisterForm(){
    return(
        <>
        <section className="relative">
                <div className="bg-[url(/splash-image.jpg)] w-screen bg-cover bg-center h-screen bg-no-repeat">
                  <div className="flex justify-center items-center h-screen">
                    <div className="h-[95%] w-full bg-[#4e3949] opacity-30 rotate-45 block"></div>
                  </div>
                </div>
                <div className="absolute bottom-[15em] flex flex-col justify-center items-start w-full">
                  <h1 className="text-white text-[2.5em] font-semibold ml-[1em]">Register New User</h1>
                
                
                  <UserRegistrationForm/>
                </div>
               
              </section>
        </>
    )
}