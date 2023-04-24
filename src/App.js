import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Escocia from './Components/Escocia';
import GrandCanyon from './Components/GrandCanyon';
import Muralha from './Components/Muralha';
import Aruba from './Components/Aruba';
import Rodape from './Components/Rodape';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

          <Routes>
              <Route path='/' element={<Home/>}/>{/*Componente padrão=index*/}
              <Route path='/Escocia' element={<Escocia/>}/>
              <Route path='/GrandCanyon' element={<GrandCanyon/>}/>
              <Route path='/Muralha' element={<Muralha/>}/>
              <Route path='/Aruba' element={<Aruba/>}/>
          </Routes>

        <Rodape/>
      </Router>
    </div>
  );
}

export default App;