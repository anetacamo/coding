import React from 'react';
import Button from './button';

const Arrow = ({ onCarouselSwipe, nameClass }) => {
  return (
    <Button onButtonClick={onCarouselSwipe} nameClass={nameClass}>
      <div className='animated flex-center'>
        <img src='/coding/images/html-tags.png' />
        <img src='/coding/images/blob.png' className='boom' />
      </div>
    </Button>
  );
};
export default Arrow;
