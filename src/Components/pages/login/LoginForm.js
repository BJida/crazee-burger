
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";
export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("");
  const navigate= useNavigate();

  // Comportements
const handleSubmit  = (event) => {
    event.preventDefault();
    //alert(`Bonjour ${inputValue}`);
    setInputValue("");
    //pour faire passer la valeur entrée dans la page de redirection
    navigate(`/order/${inputValue}`);
 }
 const handleChange = (event) => { 
    setInputValue(event.target.value);
  }
  const titreH2Style={backgroundColor:"blue", color:"white", fontSize:"15px"};
  // Affichage (render)
    return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1 style={{color:"red"}}>Bienvenue chez nous !</h1>
      <br />
      <h2  className='bonbon'>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder='Entrez votre prénom...' required />
        <button>Accédez à votre espace</button>
        {/* <Link to='/order'>vers OrderPage</Link> */}

      
    </form>
  )
}

/** 4 méthodes pour ajouter du style à un composant 
 * 1. inline style
 * 2. object style
 * 3. modules CSS (className)
 * 4. global style (index.css)
*/
/**Styled-Components
 * éviter le style collision (CSS, Sass)
 * conserver le nested styling
 */