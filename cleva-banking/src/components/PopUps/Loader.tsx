import React from "react";
import { DotLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed flex justify-center items-center inset-0 z-10 bg-[#000000cf] bg-opacity-70  h-full w-full">
      <div className="border shadow-sm py-6 px-16 m-auto bg-white rounded-xl">
        <div className="flex justify-center mb-6">
          <DotLoader
            size={25}
            color="orange"
            loading={true}
            aria-label="loading"
            className=""
          />
        </div>
        <p className="text-[12px] font-semibold">Uploading documents</p>
      </div>
    </div>
  );
}
