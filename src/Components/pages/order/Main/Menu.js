import { useState } from "react";
import styled from "styled-components";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";


export default function Menu() {
    // state
    const [menu, setMenu] = useState(fakeMenu1);
  return (
    <MenuStyled>
        
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: purple;
  
`;