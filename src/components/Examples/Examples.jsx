const Examples = () => {
  return (
    <div>
      <div className='code-box' id='menu'>
        <div className='header flex-space-btw'>
          <div className='logo flex-center-center'>logo</div>
          <div className='menu flex'>
            <div className='link'>link</div>
            <div className='link'>link</div>
            <div className='link'>link</div>
          </div>
        </div>
      </div>

      <div className='code-box' id='wellcome-screen'>
        <div className='intro flex-center-center'>
          <div className='center text-container'>
            <h1>Hello</h1>
            <p>Wellcome</p>
            <button>Read more</button>
          </div>
        </div>
      </div>

      <div className='code-box'>
        <div className='cards flex-wrap flex-center-center'>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
          <div className='card card-set'></div>
        </div>
      </div>

      <div className='code-box'>
        <div className='cards flex-wrap flex-center-center'>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
          <div className='card card-flex'></div>
        </div>
      </div>

      <div className='code-box'>
        <div className='cards flex-wrap flex-center-center'>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
          <div className='card flex'>
            <div className='image'></div>
            <div className='text'>text inside div</div>
          </div>
        </div>
      </div>

      <div className='code-box'>
        <div className='section bg-red flex'>
          <div className='max-width'>
            <div className='half container'>
              <h1>Hello</h1>
              <p>
                text inside div some more text inside a div and text insed a div
              </p>
              <button>Read more</button>
            </div>
            <div className='container half bg-blue'></div>
          </div>
        </div>
        <div className='section bg-green'>
          <div className='max-width'>
            <div className='container half bg-blue'></div>
            <div className='half container'>
              <h1>Hello</h1>
              <p>
                text inside div some more text inside a div and text insed a div
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className='section bg-red flex'>
          <div className='max-width'>
            <div className='half container'>
              <h1>Hello</h1>
              <p>
                text inside div some more text inside a div and text insed a div
              </p>
              <button>Read more</button>
            </div>
            <div className='container half bg-blue'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Examples;
