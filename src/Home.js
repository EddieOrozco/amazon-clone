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
          title='Game on the NEW PS5'
          price={299.99}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.playstation.com%2Ftachyon%2F2020%2F06%2Fps5-fi.jpg&f=1&nofb=1'
        />
        <Product
          id='2'
          title='Keep your hands clean!'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsites.psu.edu%2Fsiowfa15%2Fwp-content%2Fuploads%2Fsites%2F29639%2F2015%2F11%2F3827791_01_10.jpg&f=1&nofb=1'
        />
      </div>
      <div className='home_row'>
        <Product
          id='3'
          title="Lews Fishing Wally Marshall Pro Rod 7'0'"
          price={99.99}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lg-outdoors.com%2Fimages%2F267827.jpg&f=1&nofb=1'
        />
        <Product
          id='4'
          title='Dumbells 35lbs extra grip.'
          price={59.99}
          rating={4}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-7ddd3Lgm4bg%2FUW3Go-ggbSI%2FAAAAAAAAAXY%2FL4RiJlJTm_Y%2Fs1600%2FiStock_barbells%2B2.jpg&f=1&nofb=1'
        />
        <Product
          id='5'
          title='Forget the sun stay fresh and cool.'
          price={105.99}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.framesdirect.com%2Fproduct_elarge_images%2Frayban-sun-rb8301-002-56-angle.jpg&f=1&nofb=1'
        />
      </div>
      <div className='home_row'>
        <Product
          id='6'
          title='Rolling chair with new tech back support'
          price={10.25}
          rating={5}
          image='//external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F131610044092-0-1%2Fs-l1000.jpg&f=1&nofb=1'
        />
      </div>
    </div>
  );
}

export default Home;
