import { Faq, Hero, Know, Navbar, Partners, Platform, Services, Socielity, Testimonial, } from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
       <Know/>
       <Services/>
       <Socielity/>
      <Testimonial/>
      <Partners/>
      <Faq/>
      <Platform/>
    </div>
  );
};
