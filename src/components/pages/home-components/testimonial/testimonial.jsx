import boy from "/public/mock-imges/testimonial.png"
import transfer from "/public/mock-imges/testimonialimg.png"
export const Testimonial = () => {
  return (
    <>
      <div className="flex gap-[110px] mb-[120px]">
        <img src= {boy} alt="boy" />
        <div>
          <h5 className="text-[#474747] font-[700] text-[16px]  leading-[20px] mb-[4px]">Skylar George</h5>
          <p className=" text-[#666] font-[400]  leading-[24px]  text-[14px] mb-[19px]">Managing Director, Lovgency Company</p>
          <p className="text-[##474747] font-[700] text-[20px] leading-[28px] mb-[34px]">
            “You'll want to use a format that's viewable for your potential
            leads and aligns closely with their values. To give you an idea of
            how testimonials can be portrayed, below are the different
            testimonial types that you can use to show off your customers'
            stories”
          </p>
          <img src={transfer} alt="transfer" />
        </div>
      </div>
    </>
  );
};
