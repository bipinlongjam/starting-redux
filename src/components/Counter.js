import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const distpach = useDispatch();
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter)

  const incrementhandler =()=>{
    distpach({type:'increment'})
  }
  const decrementHandler = () =>{
    distpach({type:'decrement'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementhandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
