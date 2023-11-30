import pws from "/public/mock-imges/PWC.png" 
import target from "/public/mock-imges/target.png" 
import zoom from "/public/mock-imges/zoom.png" 
import dropbox from "/public/mock-imges/dropbox.png" 
import paypal from "/public/mock-imges/paypal.png" 
import pfizer from "/public/mock-imges/pfizer.png" 
export const Know = () => {
  return (
    <>
      <h2 className="text-[#474747] font-[700] text-[26px] text-center leading-[24px] mb-[20px] ">
        Trusted By
      </h2>
      <p className="text-[#474747] font-[400] text-[20px] text-center mb-[46px]">
        The private on-line marketplace where you are able to exchange goods and
        services, cash-free, in one place, 24/7, with a <br/>select group of
        individuals, organizations, and businesses that you know and trust.
      </p>
      <div className="flex justify-evenly mb-[180px]">
      <img src={ pws} alt="" />
      <img src={target} alt="target" />
      <img src={zoom } alt="zoom " />
      <img src={dropbox} alt="dropbox" />
      <img src={paypal } alt="paypal " />
      <img src={pfizer} alt="pfizer" />
      </div>
    </>
  );
};
