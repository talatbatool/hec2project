import Hero from "./components/Hero"
import HeroSection from "./components/Herosection"
import Product from "./components/Product"
import Inspiration from "./components/Inspiration"
import Furiro from "./components/Furiro"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import Sofa1 from "./components/Sofa1"
import Sofa from "./components/Sofa"
import Checkout from "./components/Checkout"
import Productcomp from "./components/Productcomp"
import Blog from "./components/Blog"
import Shop from "./Shop/page"

export default function Home(){
  return(
    <div>
      
      <Hero/>
      <HeroSection/>
      <Product/>
      <Inspiration/>
      <Furiro/>
      <Sofa1/>
      <Sofa/>
      <Shop/>
      
      <Cart/>
      <Checkout/>
      <Productcomp/>
    <Blog/>
    

      <Contact/>
    </div>
  )
};