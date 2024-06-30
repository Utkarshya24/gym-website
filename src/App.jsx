import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FitnessGoal from './components/FitnessGoal';
import BestOffer from './components/BestOffer';
import BestPlan from './components/BestPlan';
function App() {
 
  return (
    <>
     <Navbar/>
     <Hero/>
     <FitnessGoal/>
     <BestOffer/>
     <BestPlan/>
    </>
  )
}

export default App
