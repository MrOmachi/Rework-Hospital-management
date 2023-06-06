import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Layout/buttons/Button";
import { Link, useNavigate } from "react-router-dom";


import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Modal2({titlePosition, headerTitle, children, link,btnText,onConfirm}: any) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pb-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <header
                  className={`w-full ${titlePosition} bg-[#EFEFEF] py-4 px-8  flex justify-between`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-base font-bold leading-6 text-gray-900"
                  >
                    {headerTitle}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 font-bold"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </header>

                <div className="">
                  <div className="mt-3">
                      <body>
                      {children}
                      </body>
                  </div>
                </div>
                <footer>
                <div className="px-4 flex justify-between pt-4">
              
                  
                  <button
                    type="button"
                    className="text-sm 
                    font-bold py-3 md:px-10 px-6 
                    rounded-md mt-4 
                    bg-[#FFF5D9]"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="text-sm 
                    font-bold py-3 md:px-10 px-6] 
                    ${btn_bg} 
                    float-right 
                    rounded-md mt-4 
                    bg-[#FFBD59]"
                    onClick={onConfirm}
                    // ref={}
                  >
                    {btnText}
                  </button>
                </div>
                </footer>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
