
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      
      <SayMyName nome="Max"/>
      <SayMyName nome="Josivaldo"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="max"
        idade="24"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />

    </div>
  );
}

export default App;
