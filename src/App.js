
import './App.css';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">

     {/* <Greeting lang="de">Ludwig</Greeting>
     <Greeting lang="fr">François</Greeting>
     <Greeting lang="en">John</Greeting>
     <Greeting lang="es">Juan</Greeting> */}
     {/* <Random min={1} max={6}/>
      <Random min={1} max={100}/>    */}
      {/* <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> */}
      <Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
    </div>
  );
}

export default App;
