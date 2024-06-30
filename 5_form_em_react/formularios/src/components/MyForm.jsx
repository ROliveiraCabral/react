import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  /* 6 - controled inputs */

  // 3 - gerenciamento de dados:
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //console.log(name);
  //console.log(email);

  // após validação;
  // após envio;
  // sigo o passso 7 que é de limpar o formulário.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando o formulário");
    console.log(name, email, bio, role);
    /* 7 - limpando o formulário */
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/* 5 - envio de fomulário */}
      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - label envolvendo input */}
        <label>
          <span>Email</span>
          {/* 4 - simplificação da manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.tetarg.value)}
            value={email}
          />
        </label>
        <label>
          <span>Bio: </span>
          {/* 8 - criando text area */}
          <textarea
            name="Bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - input select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => {
              setRole(e.target.value);
              value = { role };
            }}
          >
            <option value="usuário">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adminstrador">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
