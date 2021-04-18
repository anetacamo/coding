import React, { useEffect } from 'react';
import quotes from '../quotes.json';
import Arrow from './arrow';
import Button from './button';

const Welcome = () => {
  const [currentQuoteNumber, setCurrentQuoteNumber] = React.useState(0);
  const [fade, setFade] = React.useState(false);
  const slides = quotes.length - 1;
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(function () {
        setFade(true);
      }, 2000);
      handleRightArrowClick();
      setTimeout(function () {
        setFade(false);
      }, 3000);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentQuoteNumber]);

  const handleArrowClick = () => {
    setCurrentQuoteNumber(
      currentQuoteNumber !== 0 ? currentQuoteNumber - 1 : slides
    );
  };

  const handleRightArrowClick = () => {
    setCurrentQuoteNumber(
      currentQuoteNumber !== slides ? currentQuoteNumber + 1 : 0
    );
  };

  return (
    <>
      <div className='carousel'>
        <section>
          <div
            className='flex-center'
            style={{ backgroundColor: 'white', padding: 80 }}
          >
            <Arrow onCarouselSwipe={handleArrowClick} nameClass='arrow-left' />
            <div className={`flex-center slide-cont ${fade && 'dissapear'}`}>
              <div className='boom-container flex-center'>
                <h2>{quotes[currentQuoteNumber].greet}</h2>
                <img src={quotes[currentQuoteNumber].image2} className='boom' />
              </div>
              <div className='slide-text-container'>
                <h5></h5>
                <h1>{quotes[currentQuoteNumber].quote}</h1>
                <p>{quotes[currentQuoteNumber].more}</p>
                <a href='/#/home'>
                  <button>{quotes[currentQuoteNumber].button}</button>
                </a>
              </div>
            </div>
            <Arrow
              onCarouselSwipe={handleRightArrowClick}
              nameClass='arrow-right'
            />
          </div>
        </section>
      </div>
      <div className='dots flex-center'>
        {quotes.map((item, index) => (
          <Button
            onButtonClick={() => setCurrentQuoteNumber(index)}
            nameClass={`dot ${index === currentQuoteNumber ? 'active' : null}`}
          ></Button>
        ))}
      </div>
    </>
  );
};
export default Welcome;
