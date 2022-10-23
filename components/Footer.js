import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex h-[10%] flex-col items-center justify-center border-t-2 border-gray-500">
      <div className="t flex flex-row items-center">
        <div className="text-sm italic text-gray-500">Made with</div>
        <img className="m-2 h-3 w-3" src="/images.png" />
        <div className="text-sm italic text-gray-500">in Melbourne.</div>
      </div>
      <div className="text-center text-sm italic text-gray-500">
        @ 2022 Broccoli & Co. All Rights Reserved.
      </div>
    </div>
  );
}
