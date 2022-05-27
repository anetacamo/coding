import React from 'react';
import Button from './button';

type AppProps = {
  nameClass: string;
  onCarouselSwipe: any;
};

const Arrow = ({ onCarouselSwipe, nameClass }: AppProps) => {
  return (
    <Button onButtonClick={onCarouselSwipe} nameClass={nameClass}>
      <div className='animated flex-center'>
        <img src='/coding/images/html-tags.png' alt='arrow' />
        <img src='/coding/images/blob.png' className='boom' alt='arrow' />
      </div>
    </Button>
  );
};
export default Arrow;
