import { useDispatch, useSelector } from 'react-redux';
import {counterActions} from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {
  const distpach = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const incrementhandler =()=>{
    // distpach({type:'increment'})
    distpach(counterActions.increment());
  }
  const increasethandler =()=>{
    // distpach({type:'increment', amount:2})
    distpach(counterActions.increment(10))
  }
  const decreasehandler =()=>{
    // distpach({type:'decrement', amount:2})
    distpach(counterActions.decrement(5))
  }
  const decrementHandler = () =>{
    // distpach({type:'decrement'})
    distpach(counterActions.decrement) // using reducer & redux toolkit
  }
  const toggleCounterHandler = ()=>{
    // distpach({type:'toggle'})
    distpach(counterActions.toggle)
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&
      <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increasethandler}>increment by 2</button>
        <button onClick={decreasehandler}>decrease by 2</button>
        <button onClick={incrementhandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
