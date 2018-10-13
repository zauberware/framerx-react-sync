'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.2em;\n  margin: 0;\n  letter-spacing: 0.4px;\n  font-weight: bold;\n'], ['\n  font-size: 1.2em;\n  margin: 0;\n  letter-spacing: 0.4px;\n  font-weight: bold;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents2.default.h3(_templateObject);
exports.default = Title;