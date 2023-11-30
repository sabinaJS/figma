import know from "/public/mock-imges/know1.png"
import know1 from "/public/mock-imges/know2.png"
export const Partners = () => {
  return (
    <>
      <div>
        <h1 className="text-[#474747] text-center text-[26px]  font-[700]  leading-[48px] mb-[24px]">
          They love us! Do you know why?
        </h1>
        <p className="text-[#666] text-center text-[16px]  font-[400]  leading-[24px] mb-[59px]">
          The following videos are currently in production. In the meantime,
          please use our Help Center.
        </p>
        <div className="flex gap-[30px] rounded-[10px] mb-[100px]">
         <div className="border border-red-500n rounded-2xl"> <img src={know} alt="" /></div>
          <img src={know1} alt="" />
        </div>
      </div>
    </>
  );
};
