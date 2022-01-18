import react, { useState } from 'react'

function TodoForm(props) {
  const [text, setText] = useState('')

  function handleChange(event) {
    let t = event.target.value
    setText(t)
  }
  // REVISAR A MUNDANÇA DE ESTADO DE PAI PARA FILHO
  function addItem(event) {
    event.preventDefault()
    if (text) {
      // setItems ([...items, text])
      props.onAddItem(text)
      setText('')
    }
  }

  return (
    <form>
      <input onChange={handleChange} type="text" value={text}></input>
      <button onClick={addItem}>Add</button>
    </form>
  )
}

export default TodoForm
