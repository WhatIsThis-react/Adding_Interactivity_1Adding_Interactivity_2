import './App.css';
import Counter from './components/Counter';
import TestCase from './components/TestCase';

function App() {
  //-3을 해주는 decrement도 만들어주세요~
  function increment(n) {
    return n + 1;
  }
  increment.toString = () => 'n => n+1';

  function decrement(n) {
    return n - 3;
  }
  decrement.toString = () => 'n => n-3';

  return (
    <div className="App">
      <Counter />
      <TestCase baseState={0} queue={[5, increment, 42]} expected={42} />
      <TestCase baseState={0} queue={[5, decrement, decrement]} expected={-1} />
    </div>
  );
}

export default App;
