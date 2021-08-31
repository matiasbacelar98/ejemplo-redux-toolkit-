import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import { useDispatch, useSelector } from 'react-redux';
import { getJoke } from './redux/state/joke';

function App() {
   const dispatch = useDispatch();
   const { loading, joke, error } = useSelector((state) => state.joke.value);

   return (
      <div className='App'>
         <Profile />
         <Login />
         <ChangeColor />

         {loading && <h2>LOADING JOKE...</h2>}
         {error && <h2>{error}</h2>}
         <h2>{joke}</h2>
         <button onClick={() => dispatch(getJoke())}>New Joke</button>
      </div>
   );
}

export default App;
