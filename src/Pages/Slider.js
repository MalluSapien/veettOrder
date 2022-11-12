import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
 
function Slider() {
  return (
    <div>
       <div className='container-fluid' >            
        <OwlCarousel items={1}  autoplay ={true}
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {'assets/img/img1.jpg'} alt="" /></div>  
           <div><img  className="img" src= {'assets/img/img2.jpg'} alt="" /></div>  
           <div><img  className="img" src= {'assets/img/img4.jpg'} alt="" /></div>   
      </OwlCarousel>  
      </div>  
    </div>
  )
   
}


export default Slider