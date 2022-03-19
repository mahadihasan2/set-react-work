import './App.css';
import DeviceDetalis from './components/DeviceDetails/DeviceDetalis';
import Phone from './components/Phone/Phone';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Phone name='u-phone' price='13000' details='this phone is very powerful'></Phone>
      <DeviceDetalis details='This is most cost device'></DeviceDetalis>
      <Watch></Watch>
    </div>
  );
}

export default App;
