import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../assets/images/slider_img_1.jpg"
import img2 from "../assets/images/slider_img_2.jpg"
import ReactOwlCarousel from 'react-owl-carousel';
const Slider = () => {
  return <section className=" my-10 ">
      <h2 className="font-bold text-xl mb-3">
        Today's Deals
      </h2>
    <ReactOwlCarousel loop={true}  margin={10} items={3}>
     <figure className=" item" >
        <img className="w-full" src={img1}/>
     </figure>
     <figure  className="item">
        <img src={img2}/>
     </figure>
     <figure  className="item">
        <img src={img2}/>
     </figure>
    
   </ReactOwlCarousel>
  </section>
}

export default Slider