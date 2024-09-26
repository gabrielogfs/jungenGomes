import NavBar from './NavBar';
import ItemContainer from './ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemContainer greeting={"Bem vindo ao nosso catálogo de Skins!"} />
    </div>
  );
}

export default App
