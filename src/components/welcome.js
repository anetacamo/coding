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
      <section className='carousel'>
        <div className='flex-center all-cont'>
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
              <a href='/coding/#/home'>
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

      <div className='dots flex-center'>
        {quotes.map((item, index) => (
          <Button
            onButtonClick={() => setCurrentQuoteNumber(index)}
            nameClass={`dot ${index === currentQuoteNumber ? 'active' : null}`}
          ></Button>
        ))}
      </div>
      <div className='container blog-text'>
        <p>okay. Now lets cut this off. Believe it or not.</p>
        <h1>Coding can be easy and enjoyable!</h1>{' '}
        <p>
          A powerful tool to build some amazing [and esthetically pleasing]
          things.
        </p>
        <p>
          I have been building this project as a way to store and structure my
          own knowledge - and as a platform to share it with others and support
          them on their curious journey*. I have noticed that a lot of people
          find it diffucult, boring and off-putting to learn or even to get
          acquaintanced with code, or just to greet it from the distance. Send
          an automated email to it, leave the package at door via non contact
          delivery! But I believe it is a tool of empowerement in such male and
          a tech domininated field. And however there is no need to become a
          full time programmer its a very useful insight to into a nowadays
          universe. Especially for people with non-technical mindsets.
        </p>
        <p>
          My name is Aneta and I wanted to be illustrator, studied sociology and
          ended up teaching myself coding.
        </p>
        <p>
          In Aarhus, Frontløberne, I started organising those small regular
          coding sessions where I am trying to explain some very basic concepts
          of coding and helping with various code-related tasks while teaching
          myself too. Its free and everyone is welcome.
        </p>
        <p>
          Its very much in progress as my expertise so please excuse all the
          mistakes, missconceptions and typos. Feel free to message me here
          anetacamo@gmail.com.
        </p>
      </div>
    </>
  );
};
export default Welcome;
