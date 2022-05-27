import React from 'react';

type AppProps = {
  nameClass: any;
  onButtonClick: any;
  children: any;
};

const Button = ({ children, onButtonClick, nameClass }: AppProps) => {
  return (
    <div
      className={nameClass ? nameClass : null}
      role='button'
      onClick={onButtonClick}
      onKeyDown={onButtonClick}
      tabIndex={0}
      aria-label='switch the carousel'
    >
      {children}
    </div>
  );
};
export default Button;
