'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  color: ', ';\n  padding: 20px;\n  width: 100%;\n  position: relative;\n  \n  ', '\n\n  ', '\n\n'], ['\n  ', '\n\n  color: ', ';\n  padding: 20px;\n  width: 100%;\n  position: relative;\n  \n  ', '\n\n  ', '\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    backface-visibility: hidden;\n    transition: all .25s ease-in-out;\n    position: absolute;\n    height: 90%;\n    top: 0;\n  '], ['\n    backface-visibility: hidden;\n    transition: all .25s ease-in-out;\n    position: absolute;\n    height: 90%;\n    top: 0;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    transform: rotateY(-180deg);\n  '], ['\n    transform: rotateY(-180deg);\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styleUtils = require('../style-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents2.default.div(_templateObject, function (props) {
  return (0, _styleUtils.backgroundColor)(props);
}, function (props) {
  return props.black ? 'white' : 'black';
}, function (props) {
  return (props.front || props.back) && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.back && (0, _styledComponents.css)(_templateObject3);
});

exports.default = Content;