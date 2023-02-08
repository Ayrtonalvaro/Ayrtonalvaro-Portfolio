import './App.css'
import Portfolio from './Portfolio/Portfolio'
import Navbar from './section/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="App bg-gradient-to-r from-black to-slate-900 w-full h-full dark:bg-gradient-to-r dark:from-white dark:to-slate-500  ">
        <Portfolio />
      </div>
    </>
  )
}

export default App
