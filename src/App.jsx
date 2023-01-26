import './App.css'
import Portfolio from './Portfolio/Portfolio'
import Navbar from './section/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="App bg-gradient-to-r from-black to-slate-900 w-full h-full">
        <Portfolio />
      </div>
    </>
  )
}

export default App
