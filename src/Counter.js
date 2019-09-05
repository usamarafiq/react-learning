

import React from 'react';

function useCount(initialCount=0,step=1){
    const [count, setCount] = React.useState(initialCount)
    const increment =()=>setCount(c=>c+step);
    return [count, increment];
}

function Counter() {
    const [count, increment]= useCount()
return <button onClick={increment}>{count}</button>
}


export default Counter;


