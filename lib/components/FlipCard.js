'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styled = require('../styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlipCard = function (_Component) {
  _inherits(FlipCard, _Component);

  function FlipCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FlipCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FlipCard.__proto__ || Object.getPrototypeOf(FlipCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      flipped: false
    }, _this.flip = function () {
      var flipped = _this.state.flipped;

      _this.setState({ flipped: !flipped });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FlipCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          excerpt = _props.excerpt,
          link = _props.link;
      var flipped = this.state.flipped;


      return _react2.default.createElement(
        _styled.Card,
        { flippable: true, flipped: flipped },
        _react2.default.createElement(
          _styled.Card.Content,
          { front: true, white: true, flipped: flipped },
          _react2.default.createElement(
            'h3',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            subtitle
          ),
          _react2.default.createElement(
            'a',
            { onClick: this.flip },
            'flip me!'
          )
        ),
        _react2.default.createElement(
          _styled.Card.Content,
          { back: true, black: true, flipped: flipped },
          _react2.default.createElement(
            'p',
            null,
            excerpt
          ),
          _react2.default.createElement(
            _styled.Card.ReadMore,
            { href: link },
            'Read more'
          )
        )
      );
    }
  }]);

  return FlipCard;
}(_react.Component);

exports.default = FlipCard;