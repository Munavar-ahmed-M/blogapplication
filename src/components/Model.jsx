import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router";
function Model({ children, closeNavigation }) {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(closeNavigation);
  };
  return (
    <div className="p-6 mx-auto my-10 bg-gray-100 w-fit border shadow-2xl border-gray-50 rounded-lg ">
      <div>
        <div className="flex justify-end">
          <button
            className="bg-red-600 rounded-full text-white cursor-pointer"
            onClick={handleClose}
          >
            <IoIosCloseCircle size={28} />
          </button>
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </div>
  );
}

export default Model;
