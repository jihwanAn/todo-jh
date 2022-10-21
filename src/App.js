import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import styled from 'styled-components';
import { render } from '@testing-library/react';

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>{count}</div>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button onClick={() => dispatch(increment())}>+</Button>
        </div>
      </header>
    </div>
  );
}

const Button = styled.button`
  background-color: #61DAFB;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 30px;
  margin: 15px;
`



export default App;
