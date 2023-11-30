import Button from "../../../common/Button/Button";
import services from "/public/mock-imges/services.png";
import services2 from "/public/mock-imges/services.png";
import services3 from "/public/mock-imges/services3.png";
export const Services = () => {
  return (
    <>
      <div className="flex gap-[100px]mt-[20px] gap-[100px] mb-[158px]">
        <img src={services} alt="services" />
        <div className="">
          <h3 className="text-[#474747] font-[700] text-[26px]  leading-[48px] pt-[55px] w-[558px]">
            You want to strengthen more of communities
            <br /> or groups you are associated with.
          </h3>
          <p className="text-[#474747] font-[400] text-[16px] mb-[30px]">
                  A simple definition is that leadership is the art of motivating a
            group of<br/>people to act towards achieving a common goal. In a
            business setting,this <br/>can mean directing workers and colleagues
            with a strategy to meet the<br/>company's needs.
          </p>
      <div className="text-start">  <Button>Explore More</Button></div>
        </div>
      </div>
      <div className="flex gap-[100px]mt-[20px] gap-[100px] mb-[158px]">
        <div className="">
          <h3 className="text-[#474747] font-[700] text-[26px]  leading-[48px] pt-[55px] w-[558px]">
            You want to strengthen more of communities
            <br /> or groups you are associated with.
          </h3>
          <p className="text-[#474747] font-[400] text-[16px] mb-[30px]">
                  A simple definition is that leadership is the art of motivating a
            group of<br/>people to act towards achieving a common goal. In a
            business setting,this <br/>can mean directing workers and colleagues
            with a strategy to meet the<br/>company's needs.
          </p>
      <div className="text-start">  <Button>Explore More</Button></div>
        </div>
        <img src={ services2} alt="services" />
      </div>
      <div className="flex gap-[100px]mt-[20px] gap-[100px] mb-[176px]">
        <img src={services3} alt="services" />
        <div className="">
          <h3 className="text-[#474747] font-[700] text-[26px]  leading-[48px] pt-[55px] w-[558px]">
            You want to strengthen more of communities
            <br /> or groups you are associated with.
          </h3>
          <p className="text-[#474747] font-[400] text-[16px] mb-[30px]">
             A simple definition is that leadership is the art of motivating a
            group of<br/>people to act towards achieving a common goal. In a
            business setting,this <br/>can mean directing workers and colleagues
            with a strategy to meet the<br/>company's needs.
          </p>
      <div className="text-start">  <Button>Explore More</Button></div>
        </div>
      </div>
    </>
  );
};
