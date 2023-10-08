// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import Navbar from './components/navbar/navbar'
import Welcome from './components/welcome/welcome'
import Carousel from './components/carousel/carousel';
import Background from './components/background/background'; 
import Header from './components/header/header'; 

// function App() {
//   return (
//     <div class ="main">
//       {/* <Welcome/> */}
//       <Navbar/>
//     </div>
//   );
// }

const App = () => {

  return (

    // delete the class = main to see the image
    // Possible solution: Create a background component and add the css for the space background

    <div>
      <Background/>
      <Header/>
      <Navbar/>
      <Carousel/>
    </div>
    
  )
}

export default App;