import React, { useState } from 'react'

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  function sumar(e) {
    setCounter(counter + 1);
    console.log(e);
  }

  function restar() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>{ counter }</h1>
      <button onClick={ (e) => sumar(e) }>+</button>
      <button onClick={ restar }>-</button>
    </>
  )
}

export default Counter