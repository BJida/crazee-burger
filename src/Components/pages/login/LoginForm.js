
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../../reusable-ui/TextInput';
import { BsPersonCircle } from 'react-icons/bs';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { IoChevronForward } from 'react-icons/io5';
import { theme } from '../../../theme';

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
 margin: 40px ${theme.spacing.lg};
 border-radius: ${theme.borderRadius.round};
 font-family: "Amatic SC", cursive;

 hr{
  border: 1px solid ${theme.colors.loginLine};
  margin-bottom: ${theme.gridUnit * 5}px;
  margin-left: ${theme.gridUnit * 2.5}px;
  margin-right: ${theme.gridUnit * 2.5}px;
 }

 h1{
  color:${theme.colors.white};
  font-size: ${theme.fonts.size.P5};
 }

 h2{
  margin: 20px 10px 10px;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P4};
 }
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
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