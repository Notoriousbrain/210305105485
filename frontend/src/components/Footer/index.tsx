import {
  FacebookIcon,
  InstaIcon,
  LinkedInIcon,
  YoutubeIcon,
} from "../../icons";

const Footer = () => {
  return (
    <div className="w-full bg-my-primary">
      <div className="text-white  w-full">
        <div className="bg-my-primary py-12 space-y-8 flex justify-center flex-col items-center">
          <div className="font-bold xs:font-semibold text-center text-[32px] md:text-[28px] sm:text-[24px] w-[90%]">
            Request More Information
          </div>

          <div className="text-[18px] w-1/3 lgm:w-2/5 md:w-1/2 mds:w-3/5 sm:w-4/5 sm:text-[16px] xs:text-[14px] flex text-wrap text-center items-center justify-center">
            Where style meets street, redefining fashion with every step.
            Worldwide delivery, your style destination.
          </div>

          <div className="text-black cursor-pointer font-bold xs:font-semibold bg-white rounded-[50px] px-12 py-4 sm:px-8 sm:py-3 xs:px-6 xs:py-2.5">
            Contact Us
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="border cursor-pointer border-white flex justify-center items-center w-8 h-8 rounded-[50px]">
              <LinkedInIcon />
            </div>
            <div className="border cursor-pointer border-white flex justify-center items-center w-8 h-8 rounded-[50px]">
              <FacebookIcon />
            </div>
            <div className="border cursor-pointer border-white flex justify-center items-center w-8 h-8 rounded-[50px]">
              <InstaIcon />
            </div>
            <div className="border cursor-pointer border-white flex justify-center items-center w-8 h-8 rounded-[50px]">
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
