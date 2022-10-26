import React from "react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-[5rem]">
      <footer className="fixed border-[#474444] bg-black border-t-[1px] bottom-0 h-[60px] w-[100%] items-center justify-center inline-flex">
        <p className="text-xs">
          Copyright {new Date().getFullYear()} &copy; Damicode
        </p>
      </footer>
    </div>
  );
};

export default Footer;
