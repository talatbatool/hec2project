import Hero from "./components/Hero"
import HeroSection from "./components/Herosection"
import Product from "./components/Product"
import Inspiration from "./components/Inspiration"
import Furiro from "./components/Furiro"
import Cart from "./components/Cart"
import Contact from "./components/Contact"
import Sofa from "./components/Sofa"
import Blog from "./components/Blog"

export default function Home(){
  return(
    <div>
      
      <Hero/>
      <HeroSection/>
      <Product/>
      <Inspiration/>
      <Furiro/>
      <Sofa/>
      <Cart/>
    <Blog/>
    

      <Contact/>
    </div>
  )
};