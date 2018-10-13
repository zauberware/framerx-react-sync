'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  content: \'\u2192\'\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n'], ['\n  content: \'\u2192\'\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Toggle = _styledComponents2.default.div(_templateObject);
exports.default = Toggle;