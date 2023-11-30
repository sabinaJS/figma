import gold from "/public/mock-imges/gold.png"
export const Platform = () => {
  return (
    <>
      <div>
        <h3 className="text-[#474747]  text-[26px]  font-[700]  leading-[48px] mb-[24px]">
          Award Winning Engagement Platform
        </h3>
        <p className="text-[#666]  text-[14px] text-center font-[400]  leading-[24px]  mb-[57px]">
          the private on-line marketplace where you are able to exchange goods
          and services, cash-free, in one place, 24/7, with a<br/> select group of
          individuals, organizations, and businesses that you know and trust.
        </p>
        <div>
        <div> <img src={gold} alt="" /></div>
         <h3 className="text-[#4579CB]  text-[20px]  font-[700]  leading-[28px] mb-[9] mt-[9px]">Award 2021 </h3>
         <p className="text-[#666]  text-[14px]  font-[400]  leading-[24px]  mb-[57px]" >Winning Engagement<br/> Platform that you <br/>know and trust</p>
        </div>
      </div>
    </>
  );
};
