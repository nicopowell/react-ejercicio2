import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App({mensaje}) {
  return (
    <h1 className="p-3">Hello {mensaje}!</h1>
  )
}

export default App
