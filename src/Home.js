import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home_image'
        src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w3000._CB406837549_.jpg'
        alt=''
      />
      <div className='home_row'>
        <Product
          id='1'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
        <Product
          id='1'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
      </div>
      <div className='home_row'>
        <Product
          id='1'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
        <Product
          id='1'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
        <Product
          id='1'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
      </div>
      <div className='home_row'>
        <Product
          id='1'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
      </div>
    </div>
  );
}

export default Home;
