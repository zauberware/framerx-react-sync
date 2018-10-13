/**
 * Returns background-color css property from properties
 * @param  {Object} props
 * @default background-color: white;
 * @return {String} background-color
 */
export const backgroundColor = props => `
    background-color: ${props.backgroundColor
      || (props.black && 'black')
      || (props.white && 'white')
      || 'transparent'};
  `

