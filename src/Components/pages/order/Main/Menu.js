import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import Product from "./Product";

import {formatPrice} from "../../../../utils/maths"
import Card from "../../../reusable-ui/Card";

export default function Menu() {
    // state
    const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
        {menu.map(({id, title, imageSource, leftDescription})=>{
            return (
            <div className="produit">
              <div className="image">
                <img src={imageSource} alt={title} />
              </div>
              <div className="info-text">
                <div className="title">{title}</div>
                <div className="description">
                  <div className="price">{leftDescription}</div>
                  <button className="add-button">Ajouter</button>
                </div>
              </div>
            </div>
            );
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
