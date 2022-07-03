import styled from 'styled-components';
import { pri500, sec500, success500, warn500, err500, info500, grey500 } from './Colors';

export const Button = styled.button`
    font-size: ${props=>props.size==='large'? '24px' :
    props.size === 'small'? '12px':
    '16px'
    };
    border-radius: 30px;
    padding: 10px 20px;

    color: ${props=>
    props.type !=='outline' && props.type !== 'text'? '#fff':
    props.color === 'secondary' ? sec500 :
    props.color === 'success'? success500 :
    props.color === 'warning'? warn500:
    props.color === 'error' ? err500:
    props.color === 'info' ? info500:
    props.color === 'grey' ? grey500:
    props.type ==='outline' || props.type ==='text' ? pri500:
    '#fff'};

    border:${props=>props.type==='outline'? `2px solid 
    ${props.color === 'secondary'? sec500 : 
    props.color === 'success'? success500 :
    props.color === 'warning'? warn500: 
    props.color === 'error'? err500:
    props.color === 'info'? info500:
    props.color === 'grey'? grey500:
    pri500}`
    :'none'};

    background: ${props => props.type === 'outline' || props.type === 'text' ? 'none':
    props.color ==='secondary' ? sec500 : 
    props.color === 'success'? success500 :
    props.color === 'warning'? warn500: 
    props.color === 'error'? err500:
    props.color === 'info'? info500:
    props.color === 'grey'? grey500:
    pri500};

    ${
        props => props.sx
    }
`
