import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector( state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p> count is {counter} </p>
        <button onClick={ () => dispatch( increment() ) }>
          increment
        </button>
        <button onClick={ () => dispatch( incrementByAmount(2) ) }>
          increment by 2
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          decrement
        </button>
      </div>
    </>
  )
}

export default App
