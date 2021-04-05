import React from 'react';

const Grid = () => {
  const n = 2400; // Or something else
  const m = 20; // Or something else

  return (
    <div className='grid-bg'>
      <h1 style={{ fontSize: 120, letterSpacing: 12, marginBottom: 0 }}>
        SHOP
      </h1>
      <h2 style={{ marginTop: 24 }}></h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <p className='tiny'>
          anetacamo <i>archive</i> <br />
          of the things that were supposed to be forgotten
          <br />
          <span style={{ fontWidth: 100 }}>
            in the forrest wondering around looking for a blueberries something
            makes the branches make an unpleasant noice.
          </span>
        </p>
        <p className='tiny'>
          <a>SHOP</a> // <i>HOME</i> // <a>BAG</a>
        </p>
      </div>
      <div className='flex' style={{ position: 'relative' }}>
        {[...Array(n)].map((e, i) => (
          <div className='square' key={i}></div>
        ))}

        <div className='flex grid-larger'>
          {[...Array(m)].map((e, i) => (
            <div
              className='square-larger'
              key={i}
              style={{
                backgroundImage: 'url(images/prints/nicksway.png)',
                backgroundSize: 'cover',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Grid;
