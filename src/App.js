import './App.css';
import TopNav from './components/topnav/TopNav';
import SideNav from './components/sidenav/SideNav';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className='container'>
        <SideNav />
        <Home />
      </div>
    </div>
  );
}

export default App;
