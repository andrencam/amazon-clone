import React from 'react'

import './Home.css'
import Product from './Product'

function Home () {
  return (
    <div className="home">
      <img 
      className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      alt="background"
      />

      <div className="home__row">
        <Product 
          id="A3025011"
          title="Anker Soundcore Life Q20 Bluetooth Headphones, Hybrid Active Noise Canceling, 40H Playtime, Hi-Res Audio"
          price={79.99}
          rating={5}
          image="https://d2211byn0pk9fi.cloudfront.net/spree/products/80007/product/A3025011_TD01_V2.jpg?1567584792"
        />
        <Product 
          id="AC_SL1500_Z606"
          title="Z606 5.1 Surround Sound Speaker System with Bluetooth"
          price={165.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Jog-wotuL._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product 
          id="AC_SL1000"
          title="Magnetic Dry Erase Whiteboard Sheet for Kitchen Refrigerator"
          price={16.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41cEaQEF67L._AC_SL1000_.jpg"
        />
        <Product 
          id="81pXga07nxL"
          title="Arctic Zone Titan Deep Freeze 60 Can Rolling Cooler with at Cart"
          price={83.12}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81pXga07nxL._AC_SL1500_.jpg"
        />
        <Product 
          id="ZqUqUOL"
          title="https://images-na.ssl-images-amazon.com/images/I/31f-ZqUqUOL._AC_.jpg"
          price={70.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31f-ZqUqUOL._AC_.jpg"
        />
      </div>

      
      <div className="home__row">
        <Product 
          id="816fKGKn"
          title="dbest Products Cooler Trolley Dolly, Black Insulated Cooler Bag Folding Collapsible Rolling Shopping Grocery Tailgating BBQ Beer Ice Cart"
          price={99.22}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/816fKGKnNwL._AC_SL1500_.jpg"
        />
  
      </div>

    </div>
  )
}

export default Home