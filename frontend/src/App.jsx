
import './App.css'



import Navbar from './components/Navbar/Navbar'
// import CardDetails from './pages/CardDetails/CardDetails'
import CardPage from './pages/CardPage/CardPage'



function App() {
  

  return (
    <>
     <header>
     <Navbar />
     </header>
     <main>
      <CardPage/>
      {/* <CardDetails/> */}
     </main>
     <footer>

     </footer>
    </>
  )
}

export default App
