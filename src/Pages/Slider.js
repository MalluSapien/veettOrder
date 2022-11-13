import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Pic from '../BannerImages/img-1.png';
import Pic2 from '../BannerImages/img-2.jpeg';
import Pic3 from '../BannerImages/img-3.png'; 
import Pic4 from '../BannerImages/img-4.png'; 
function Slider() {
  return (
    <div>
       <div className='container-fluid p-0' >            
        <OwlCarousel items={1}  autoplay ={true}
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
          <div><img  className="img" src= {Pic} alt="" /></div>
           <div><img  className="img" src= {Pic2} alt="" /></div>  
           <div><img  className="img" src= {Pic3} alt="" /></div>  
           <div><img  className="img" src= {Pic4} alt="" /></div>   
      </OwlCarousel>  
      </div>  
    </div>
  )
   
}


export default Slider