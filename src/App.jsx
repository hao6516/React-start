import { useEffect, useState } from 'react'
import './App.css'



function useToggle() {
  const [show, setShow] = useState(true)
  const toggle = () => {
    setShow(!show)
  }
  // 哪些状态和回调函数需要在其他组件中使用 return
  return {
    show,
    toggle
  }
}
function App() {
  const { show, toggle } = useToggle()
  return (
    <>
      {show && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </>
  )
}

export default App
