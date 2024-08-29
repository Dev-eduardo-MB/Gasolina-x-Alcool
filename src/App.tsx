import Form from './components/Form.tsx'
import logoimg from './assets/Logo.png'
import './App.css'


function App() {
  return (
    <div>
      <main className="container">
        <img
          className="logo"
          src={logoimg}
          alt="logo"
        />
        <h1 className="title">Qual é a melhor escolha?</h1>
        <Form />
      </main>
    </div>
  );
}

export default App;
