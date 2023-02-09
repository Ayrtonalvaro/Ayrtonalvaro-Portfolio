import './App.css'
import Portfolio from './Portfolio/Portfolio'
import Navbar from './section/Navbar'

function App() {
  return (
    <>
      <div className="  bg-gradient-to-r from-black to-slate-900  h-full dark:bg-gradient-to-r dark:from-white dark:to-slate-500 ">
        <Navbar />
        <div className="App w-full container mx-auto  ">
          <Portfolio />
        </div>
      </div>
    </>
  )
}

export default App
