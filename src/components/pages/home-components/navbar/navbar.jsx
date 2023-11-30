import Button from "../../../common/Button/Button";



export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between pt-[24px] pb-[127px] mb-[50px]">
        <div><p className="text-[#4579CB] font-[700] text-[36px]">Socielity</p></div>
        <div className="flex justify-center gap-7 items-center">
          <div>
            <ul className="flex gap-[60px] text-[16px] font-[700] text-[#666] leading-[24px]">
              <li>Socielity</li>
              <li>Resources</li>
              <li>Platfrom</li>
              <li>Support</li>
              <li>Login</li>
            </ul>
          </div>
        <Button>Explore More</Button>
        </div>
      </div>
    </>
  );
};