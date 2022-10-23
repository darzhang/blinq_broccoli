export default function SuccessMessage({ handleClose }) {
  return (
    <div className="z-10 flex h-[50%] w-[90%] flex-col items-center justify-start gap-[2.5%] border-2 border-gray-500 bg-white xl:w-[40%]">
      <div className="flex h-[20%] flex-col items-center justify-center italic">
        <div className="text-xl font-bold text-gray-500">All done!</div>
        <div className="w-8 border-b-2 border-gray-500"></div>
      </div>
      <div className="flex h-[40%] w-[80%] flex-col justify-center">
        <div className="text-center text-gray-500">
          You will be one of the first to experience
        </div>
        <div className="text-center text-gray-500">
          Broccoli & Co. when we launch.
        </div>
      </div>
      <button
        className="h-[10%] w-[80%] border-2 border-gray-500 text-gray-500 hover:cursor-pointer"
        onClick={handleClose}
      >
        OK
      </button>
    </div>
  );
}
