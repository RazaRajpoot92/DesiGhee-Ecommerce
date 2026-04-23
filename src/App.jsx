import './App.css'
import ChooseUs from './components/ChooseUs'
import FounderSection from './components/FounderSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import TestimonialSection from './components/TestimonialSection'

function App() {


  return (
    <>
      <Navbar />
      
        <Hero />
        <ChooseUs />
        <Products />
        <FounderSection />
        <TestimonialSection />
    
      
      <div className='h-screen'></div>
    </>
  )
}

export default App
