export default function Button({text, type}) {
  return (
    <>
    <div className="flex justify-center ">
      <button type={type}  className="bg-[#5E2E53] text-white h-[2em] w-[10em] rounded-lg  text-[1.7em]">
      {text}
      </button>
    </div>
    </>
);
}
