
import { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      
        <div >
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
      
        <div>          
          <div className='input-with-icon'>
            <BsPersonCircle className='icon'/>
            <input value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder='Entrez votre prénom'
            required
            />
          </div>
          <button>Accéder à mon espace</button>
        </div>
        {/* <Link to='/order'>vers OrderPage</Link> */}

      
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
 background: green; 
 text-align: center;
 max-width: 500px;
 min-width: 400px;
 margin: 0px auto;
 margin: 2.5rem 2rem;
 border-radius: 5px;
 font-family: "Amatic SC", cursive;
 hr{
  border: 1px solid #f56a2c;
  margin-bottom: 40px;
 }
 h1{
  color: white;
  font-size: 40px;
 }
 h2{
  color: #8e8b8b;
  margin: 20px 10px 10px;
  color: white;
  font-size: 36px;
 }
 .input-with-icon{
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon{
    font-size:15px ;
    margin-right: 8px;
    color: #93a2b1;
  }
  input{
    border: none;
    font-size: 15px;
    color: #17161a;
  }
  &::placeholder{
    background: white;
    color: lightgray;
  }
 }
`;
/** 4 méthodes pour ajouter du style à un composant 
 * 1. inline style
 * 2. object style
 * 3. modules CSS (classNam>.css)
*/
/**Styled-Components
 * éviter le style collision (CSS, Sass)
 * conserver le nested styling
 */