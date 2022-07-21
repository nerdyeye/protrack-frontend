import styled from 'styled-components';
import {  success500, err500, info500, grey500, grey50, success50,err50, grey400 } from '../../helpers/Colors';

export const Input = styled.input`
    width: 25%;
    padding: 20px 24px;
    border-radius: 30px;
    color: ${grey400};

    background-color:${props => props.status !=='error' && props.status !=='success'? grey50:
    props.status === 'error' ? err50:
    props.status === 'success' ? success50:
    grey50};

    border:${props=>`2px solid
    ${props.status !== 'error' && props.status !== 'success' && props.status !== 'disabled'? '#fff':
      props.status === 'disabled' ? grey500:  
      props.status === 'success' ? success500:
      props.status === 'error'? err500:
      '#fff'}`
    };

  &:hover{
    border:${props => `2px solid ${props.status !== 'error' && props.status !== 'success' && props.status !== 'disabled'? info500:
    props.status === 'error' ? err500:
    props.status === 'success' ? success500:
    props.status === 'disabled' ? grey500:
  info500}`
  }
  };
`


export const PasswordInput = styled(Input).attrs({
    type: "password",
   
  })`

  `