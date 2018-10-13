import styled, { css } from 'styled-components'
import { backgroundColor } from '../style-utils'

const Content = styled.div`
  ${props => backgroundColor(props)}

  color: ${props => props.black ? 'white' : 'black'};
  padding: 20px;
  width: 100%;
  position: relative;
  
  ${props => (props.front || props.back) && css`
    backface-visibility: hidden;
    transition: all .25s ease-in-out;
    position: absolute;
    height: 90%;
    top: 0;
  `}

  ${props => props.back && css`
    transform: rotateY(-180deg);
  `}

`

export default Content
