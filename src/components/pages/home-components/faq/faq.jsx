import Input from "../../../common/input/Input";

export const Faq = () => {
  return (
    <>
      <div>
        <h1 className="text-[#474747] text-center text-[26px]  font-[700]  leading-[48px] mb-[24px]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#666]  text-[14px] text-center font-[400]  leading-[24px]  mb-[61px]">
          In order to acquire the goods and services that will satisfy the
          various needs that you have in your life, you have six concentric
          <br />
          circles or realms to explore. Beginning in the center and radiating
          outwards, these realms are:{" "}
        </p>
        <div className="flex gap-[30px] mb-[120px]">
          <Input />
          <Input />
        </div>
      </div>
    </>
  );
};
