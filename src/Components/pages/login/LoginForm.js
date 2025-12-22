
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");
  // Comportements
const handleSubmit  = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
 }
 const handleChange = (event) => { 
    setInputValue(event.target.value);
  }
  // Affichage (render)
    return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder='Entrez votre prénom...' required />
        <button>Accédez à votre espace</button>
        <Link to='/order'>vers OrderPage</Link>

      
    </form>
  )
}
