import {Header} from './components/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Home} from './Pages/Home'
import {AnimeInfo} from './Pages/AnimeInfo';
function App() {  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/anime/:id' element={<AnimeInfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
