import Image from "next/image";
import BotpressLogo from "../public/Botpress_Logo_White.png";

export default function Header() {
  return (
    <>
      <div className="bg-black h-16 border-b border-gray-100 border-opacity-20 mb-5">
        <div className="m-auto w-full max-w-[1300px] h-full flex items-center">
          <Image src={BotpressLogo} alt="Botpress Logo" height={60} />
        </div>
      </div>
    </>
  );
}
