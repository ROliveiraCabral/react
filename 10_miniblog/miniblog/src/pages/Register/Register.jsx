import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
        </label>
        <input type="text" name="name" required placeholder="Nome do usuário" />
        <label>
          <span>Email:</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email do usuário"
        />
        <label>
          <span>Senha:</span>
        </label>
        <input
          type="password"
          name="password"
          required
          placeholder="Insira sua senha"
        />
        <label>
          <span>Confirmação de senha:</span>
        </label>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirme a sua senha"
        />
        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
