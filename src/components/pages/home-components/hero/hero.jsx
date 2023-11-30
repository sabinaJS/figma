import Button from "../../../common/Button/Button";
import youTube from "/public/mock-imges/icons/youTube.svg"

export const Hero = () => {
  return (
    <>
      <div>
        <h1 className="text-[#474747] font-[700] text-[56px] text-center leading-[78px] mb-[38px]">
          Your Private Online Marketplace
          <br /> Where{" "}
          <span className="text-[#4579CB] font-[700] text-[56px] leading-[78px]">
            Socielities
          </span>{" "}
          That Comprise Your
          <br /> Personal{" "}
          <span className="text-[#4579CB] font-[700] text-[56px] leading-[78px] ">
            World
          </span>
        </h1>
        <p className="text-center text-[#666] font-[400]  text-[16px] mb-[38px]">
          Your private online marketplace where you can trade goods and services
          with family, friends, neighbors, classmates, <br />
          co-workers, and members of the many other communities that comprise
          your personal world.
        </p>
         <div className="flex justify-center mb-[16px]">
          <Button>Explore More</Button>
          </div>
          <div className="flex  justify-center gap-[20px] mb-[114px]">
          <img src={youTube} alt="" />
          <p className="text-[#666]  text-[16px]">
      
            Let's have a look
          </p>
        </div>
        
        </div>
       
     
    </>
  );
};
