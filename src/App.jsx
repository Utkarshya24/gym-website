import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitnessGoal from './components/FitnessGoal';
import BestOffer from './components/BestOffer';
function App() {
 
  return (
    <>
     <Navbar/>
     <Hero/>
     <FitnessGoal/>
     <BestOffer/>
    </>
  )
}

export default App
