import styled from "styled-components";

export default function Logo() {
  return (
    <LoginFormStyleld><h1>CRAZEE</h1> 
    <img src="/images/logo-orange.png" alt="Logo Burger" />
    <h1>BURGER</h1></LoginFormStyleld>
  )
}
const LoginFormStyleld = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1{
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img{
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin:0 5px ;
  }
`;