import * as React from "react";
import Remove from "./Remove";

interface WappButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
}

const WappButton: React.FC<WappButtonProps> = ({ children, ...rest }) => {
  return (
    <div className='bg-white w-[100vw] fixed top-0 left-0 py-2 flex flex-row items-center justify-center border shadow-md z-[99]'>
      <button
        className='bg-green-600 py-2 px-5 text-white rounded-xl shadow-md flex gap-2'
        {...rest}
      >
        {children}
        <div>
          <picture>
            <img
              src='assets\whatsapplogo.svg'
              className='object-cover'
              alt='whatsapp'
            />
          </picture>
        </div>
      </button>
    </div>
  );
};

export default WappButton;
