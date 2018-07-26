import React from 'react';
import classNames from 'classnames';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')}>
     <h1>Welcome to Inganji</h1>

     <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="..." alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
</div>
    </div>
  );
}

export default Home;
