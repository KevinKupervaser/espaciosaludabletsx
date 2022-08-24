import React from "react";

interface RemoveProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
}

const Remove: React.FC<RemoveProps> = ({ children, ...rest }) => {
  return (
    <div className='absolute right-[1rem] md:right-[5rem]'>
      <button {...rest}>
        <picture>
          <img
            src='assets/remove.png'
            alt='trash'
            className='w-[36px] h-[36px]'
          />
        </picture>
        {children}
      </button>
    </div>
  );
};

export default Remove;
