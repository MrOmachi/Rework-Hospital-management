import React from "react";
export default function SmallModal({ children }: any) {
  

  return (
    <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="fixed right-0 mr-[5%] mt-[12%] top-6 py-1 border w-32 shadow-lg rounded-md bg-white">
        {children}
      </div>
    </div>
  )
}
