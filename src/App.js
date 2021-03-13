import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';


function App() {
  return (
    <div className="app">
     
      {/*header*/}
      <Header/>
      <div className='app__body'>
        <Sidebar/>
  <Feed/>
      {/*feed*/}
      {/*widgets*/}

      </div>


    
    
    </div>
  );
}

export default App;
