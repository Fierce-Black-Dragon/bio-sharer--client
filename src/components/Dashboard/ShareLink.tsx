import React, { useState } from "react";
import { linkType } from "../../types";
import LinkForm from "./LinkForm";

const ShareLink = (link: linkType) => {
  console.log(link);
  const [open, setOpen] = useState(false);
  const handleopen = () => setOpen(!open);
  return (
    <div className=" bg-white p-2   shadow sm:overflow-hidden ">
      <div className=" flex sm:rounded-md  lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1 flex">
          <h3 className="text-sm font-medium leading-6 text-gray-900">
            {link.title === "" ? "Blank link" : link.title}
          </h3>
        </div>
        <div className=" flex ">
          <button
            type="button"
            onClick={handleopen}
            className="items-center rounded-md border border-gray-300 bg-white px-2 py-1 text-xs font-small text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {/* <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" /> */}
            Edit
          </button>
        </div>
      </div>
      {open ? (
        <>
          <LinkForm link={link} setOpen={handleopen} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default ShareLink;
