import styled, { css } from 'styled-components'

import Title from './Title'
import Content from './Content'
import ReadMore from './ReadMore'
import Footer from './Footer'

const Card = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  ${props => props.flippable && css`
    perspective: 1000px;
    transition: all .25s ease-in-out;
    min-height: 335px;

  `}

  ${props => props.flipped && css`
    & > div:first-child{
      transform: perspective(1000px) rotateY(-180deg);
    }
    & > div:last-child{
      transform: perspective(1000px) rotateY(0deg);
    }
  `}
`

Card.Title = Title
Card.Content = Content
Card.ReadMore = ReadMore
Card.Footer = Footer

export default Card
