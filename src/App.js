
import './App.css';
import SideBar from './components/sidebar/sidebar';
import MainDash from './components/maindash';
import RightSideBar from './components/RightSide/rightSideBar';



function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <SideBar/>
       <MainDash/>
       <RightSideBar/>
      </div>
    </div>
  );
}

export default App;
