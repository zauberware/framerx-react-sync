'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns background-color css property from properties
 * @param  {Object} props
 * @default background-color: white;
 * @return {String} background-color
 */
var backgroundColor = exports.backgroundColor = function backgroundColor(props) {
  return '\n    background-color: ' + (props.backgroundColor || props.black && 'black' || props.white && 'white' || 'transparent') + ';\n  ';
};