import styled from "styled-components";
import { theme } from "../../theme";

export default function Input({value, onChange,Icon, ...extraProps}) {
console.log("restProps: ", extraProps)
  return (
          <InputStyled>
                {Icon && Icon}
                <input 
                value={value}
                onChange={onChange}
                type="text"
                {...extraProps}
                />
          </InputStyled>
  )
}

const InputStyled = styled.div`
  /* border: 1px solid red; */
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 20px;

  .icon{
    font-size: ${theme.fonts.size.P0} ;
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }
  input{
    border: none;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.dark};
    width: 100%;
    /*display: flex; */
     &::placeholder{
    background: ${theme.colors.white};
    color: ${theme.colors.greyMedium};
  }
  }
 
 
  
`;