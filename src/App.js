import { Fragment } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import {useStateValue} from './StateProvider';
import reducer, {actionTypes} from './reducer';
import './App.css';



function App() {
  const [{user}, dispatch]=useStateValue();
  return (
    <div className="app">
     {!user ? 
      <Login></Login>:<Fragment><Header/>
      <div className='app__body'>
        <Sidebar/>
  <Feed/>
     <Widgets/>

      </div>

     </Fragment>}
     </div>
       
  );
}

export default App;
