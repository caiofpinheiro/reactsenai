
import {useState} from 'react';
import './App.css';

function App() {

  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['kaede', 'jiyeon', 'yeonji']);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Usuário ja existe na lista.');
      return;
    }

    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  }
  return (
    <div className='App'>
      <img src='https://i.pinimg.com/736x/13/6b/30/136b302a17681b88fd610121d1f161a9.jpg'></img>
      <hr/>
      <h2>Adicionar usuário</h2>
      <input 
      type='text'
      placeholder='Digite o nome do usuário'
      value={usuario}
      onChange={(e) => setUsuario(e.target.value)}
      />
      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuários</h2>
      <ol>
        {usuarios.map((usuario, index) => (
        <li key={index}>{usuario}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
