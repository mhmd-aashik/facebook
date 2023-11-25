import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="cursor-pointer flex items-center sm:h-14 md:px-10 hover:bg-gray-100 rounded-xl active:border-b-2 border-blue-500 group ">
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 group-hover:text-blue-500 mx-auto 
        ${active && "text-blue-500"}`}
      />
    </div>
  );
};

export default HeaderIcon;
