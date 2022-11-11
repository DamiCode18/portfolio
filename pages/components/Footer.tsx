import React from "react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-[5rem]">
      <footer className="px-4 d-flex justify-between fixed border-[#474444] bg-black border-t-[1px] bottom-0 h-[60px] w-[100%] items-center inline-flex">
        <p className="text-xs">
          Copyright {new Date().getFullYear()} &copy;{" "}
          <a
            href="https://www.twitter.com/dami_code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Damicode
          </a>
        </p>
        <p className="text-xs ml-20">
          Designed by {" "}
          <a
            href="https://www.twitter.com/bolub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Bolub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
