
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  //const titreH2Style={backgroundColor:"blue", color:"white", fontSize:"15px"};
  // Affichage (render)
    return (
    <form action="submit" onSubmit={handleSubmit}>
      
        <div >
          <h1>Bienvenue chez nous !</h1>
          <br />
          <h2>Connectez-vous</h2>
        </div>
      
        <div>          
          <input value={inputValue} 
          onChange={handleChange} 
          type="text" 
          placeholder='Entrez votre prénom' required />
          <button>Accéder à mon espace</button>
        </div>
        {/* <Link to='/order'>vers OrderPage</Link> */}

      
    </form>
  )
}


/** 4 méthodes pour ajouter du style à un composant 
 * 1. inline style
 * 2. object style
 * 3. modules CSS (classNam>.css)
*/
/**Styled-Components
 * éviter le style collision (CSS, Sass)
 * conserver le nested styling
 */