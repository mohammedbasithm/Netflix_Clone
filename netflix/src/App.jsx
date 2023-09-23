
import './App.css'
import {Originals,Actions,HorrorMovies,RomanceMovies,ActionMovies} from './Urls'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost'

function App() {
  
  return (
    <>
      <Navbar/>
      <Banner/>
      <Rowpost url={Originals} title='Netflix Originals' />
      <Rowpost url={Actions} title='Actions' isSmall />
      <Rowpost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <Rowpost url={RomanceMovies} title='RomanceMovies' isSmall/>
    </>
  )
}

export default App
