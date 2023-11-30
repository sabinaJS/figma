import React from "react";

const Input = () => {
  return (
    <div className="w-[570px] p-[23px] text-[16px] leading-[24px] rounded-[10px] text-[#8C8C8C] bg-[#fff] border-[2px]red">
      <input
        type="text"
        placeholder="+ General"
        className="block pl-[27px] pt-[23px] pb-[23px] mb-[33px] border-2 border-current w-[570px] rounded-[10px]"
      />
      <input
        type="text"
        placeholder="+ Registration"
        className="block pl-[27px] pt-[23px] pb-[23px] mb-[33px] border-2 border-current w-[570px] rounded-[10px]"
      />
      <input
        type="text"
        placeholder="+ Trade Partners"
        className="block pl-[27px] pt-[23px] pb-[23px] mb-[33px] border-2 border-current w-[570px] rounded-[10px]"
      />
      <input
        type="text"
        placeholder="+ My Showcase"
        className="block pl-[27px] pt-[23px] pb-[23px] mb-[33px] border-2 border-current w-[570px] rounded-[10px]"
      />
    </div>
  );
};

export default Input;
