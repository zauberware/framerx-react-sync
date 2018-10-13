'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n\n  ', '\n\n  ', '\n'], ['\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    perspective: 1000px;\n    transition: all .25s ease-in-out;\n    min-height: 335px;\n\n  '], ['\n    perspective: 1000px;\n    transition: all .25s ease-in-out;\n    min-height: 335px;\n\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    & > div:first-child{\n      transform: perspective(1000px) rotateY(-180deg);\n    }\n    & > div:last-child{\n      transform: perspective(1000px) rotateY(0deg);\n    }\n  '], ['\n    & > div:first-child{\n      transform: perspective(1000px) rotateY(-180deg);\n    }\n    & > div:last-child{\n      transform: perspective(1000px) rotateY(0deg);\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Title = require('./Title');

var _Title2 = _interopRequireDefault(_Title);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _ReadMore = require('./ReadMore');

var _ReadMore2 = _interopRequireDefault(_ReadMore);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Card = _styledComponents2.default.div(_templateObject, function (props) {
  return props.flippable && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.flipped && (0, _styledComponents.css)(_templateObject3);
});

Card.Title = _Title2.default;
Card.Content = _Content2.default;
Card.ReadMore = _ReadMore2.default;
Card.Footer = _Footer2.default;

exports.default = Card;