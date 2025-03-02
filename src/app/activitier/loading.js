import Image from "next/image";
import placeholderImg from "../../assets/placeholderImg.jpg";

export default async function Loading() {
    return(
        <>
        <Image src={placeholderImg} height={400} width={400} alt="..."/>
        <div className=" h-8 w-32 bg-gray-400"></div>
        {/* <div>Loading....</div> */}
        </>
    )
}