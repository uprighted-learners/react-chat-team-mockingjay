import './App.css';
import Auth from './components/authorization-section/Auth';
import MainHeader from './components/header-section/MainHeader';
import NavigationBar from './components/navigation-section/NavigationBar';


function App() {


  return (
    <div>
      <MainHeader/>
      <NavigationBar/>
      <Auth  />
    </div>
  );
}

export default App;
