import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import {formatPrice} from "../../../../../src/utils/maths"
import Card from "../../../reusable-ui/Card";

export default function Menu() {
    // state
    const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
        {menu.map(({id, title, imageSource, price})=>{
            return (
            <Card key={id} title={title} imageSource={imageSource} leftDescription={formatPrice(price)}/>
          )
            
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;

  .produit{
    background: red;
    width: 240px;
    height: 330px;
    
    .image{
      border: 1px solid fuchsia;
      width: 100px;
      height: auto;

      img{
        width: 100%;
        height: 100%;
      }
   }
  }
  
`;
