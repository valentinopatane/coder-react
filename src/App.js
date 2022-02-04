import './App.css';
import Navbar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Valentino"></ItemListContainer>
    </>
  );
}

export default App;
