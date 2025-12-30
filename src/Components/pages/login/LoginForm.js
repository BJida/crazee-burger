
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../../reusable-ui/TextInput';
import { BsPersonCircle } from 'react-icons/bs';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { IoChevronForward } from 'react-icons/io5';

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
          <TextInput value={inputValue} 
          onChange={handleChange}
          placeholder={'Entrez votre prénom'} 
          Icon={<BsPersonCircle className='icon'/>}
          required
          />  
          <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={ <IoChevronForward className='icon'/>}
          />
        </div>
        {/* <Link to='/order'>vers OrderPage</Link> */}

      
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
 
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
  margin-left: 20px;
  margin-right: 20px;
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
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
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