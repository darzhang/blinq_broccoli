import { useState } from "react";
import RequestDialog from "./RequestDialog";

export default function MainBody() {
  const [dialog, setDialog] = useState(false);
  return (
    <div className="flex h-[80%] flex-col items-center justify-center">
      <div className="text-center text-5xl font-bold text-gray-500">
        A better way
      </div>
      <div className="text-center text-5xl font-bold text-gray-500">
        to enjoy every day.
      </div>
      <div className="m-6 text-center text-gray-500">
        Be the first to know when we launch.
      </div>
      <button
        onClick={() => setDialog(true)}
        className="p-4 text-gray-500 outline"
      >
        Request an invite
      </button>
      {dialog && <RequestDialog handleClose={() => setDialog(false)} />}
    </div>
  );
}
