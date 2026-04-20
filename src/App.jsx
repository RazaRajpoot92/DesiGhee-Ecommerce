import './App.css'
import ChooseUs from './components/ChooseUs'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {


  return (
    <>
      <Navbar />
      
        <Hero />
        <ChooseUs />
        <Products />
    
      
      <div className='h-screen'></div>
    </>
  )
}

export default App
