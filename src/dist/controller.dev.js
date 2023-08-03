"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var connection = require('./db');

var _require = require('./helper'),
    helper = _require.helper;

var controller =
/*#__PURE__*/
function (_helper) {
  _inherits(controller, _helper);

  function controller() {
    _classCallCheck(this, controller);

    return _possibleConstructorReturn(this, _getPrototypeOf(controller).apply(this, arguments));
  }

  _createClass(controller, [{
    key: "getall",
    value: function getall(res, check, value) {
      var text, _ref, rows, _text, _ref2, _rows, _text2, _ref3, _rows2, _text3, _ref4, _rows3;

      return regeneratorRuntime.async(function getall$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(check == 'post')) {
                _context.next = 14;
                break;
              }

              text = 'select * from blog';
              _context.prev = 3;
              _context.next = 6;
              return regeneratorRuntime.awrap(connection.query(text));

            case 6:
              _ref = _context.sent;
              rows = _ref.rows;
              return _context.abrupt("return", res.send(rows));

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", res.status(400).send(_context.t0));

            case 14:
              if (!(check == 'date')) {
                _context.next = 27;
                break;
              }

              _text = 'select * from blog where date= $1 ';
              _context.prev = 16;
              _context.next = 19;
              return regeneratorRuntime.awrap(connection.query(_text, [value]));

            case 19:
              _ref2 = _context.sent;
              _rows = _ref2.rows;
              return _context.abrupt("return", res.send(_rows));

            case 24:
              _context.prev = 24;
              _context.t1 = _context["catch"](16);
              return _context.abrupt("return", res.status(400).send(_context.t1));

            case 27:
              if (!(check == 'author')) {
                _context.next = 40;
                break;
              }

              _text2 = 'select * from blog where author= $1 ';
              _context.prev = 29;
              _context.next = 32;
              return regeneratorRuntime.awrap(connection.query(_text2, [value]));

            case 32:
              _ref3 = _context.sent;
              _rows2 = _ref3.rows;
              return _context.abrupt("return", res.send(_rows2));

            case 37:
              _context.prev = 37;
              _context.t2 = _context["catch"](29);
              return _context.abrupt("return", res.status(400).send(_context.t2));

            case 40:
              if (!(check == 'category')) {
                _context.next = 53;
                break;
              }

              _text3 = 'select * from blog where category= $1 ';
              _context.prev = 42;
              _context.next = 45;
              return regeneratorRuntime.awrap(connection.query(_text3, [value]));

            case 45:
              _ref4 = _context.sent;
              _rows3 = _ref4.rows;
              return _context.abrupt("return", res.send(_rows3));

            case 50:
              _context.prev = 50;
              _context.t3 = _context["catch"](42);
              return _context.abrupt("return", res.status(400).send(_context.t3));

            case 53:
              _context.next = 58;
              break;

            case 55:
              _context.prev = 55;
              _context.t4 = _context["catch"](0);
              return _context.abrupt("return", res.status(400).send(_context.t4));

            case 58:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 55], [3, 11], [16, 24], [29, 37], [42, 50]]);
    }
  }, {
    key: "getsingle",
    value: function getsingle(res, id) {
      var text, _ref5, rows;

      return regeneratorRuntime.async(function getsingle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("in getsingle", id);
              text = 'select * from blog where id= $1 ';
              _context2.prev = 2;
              _context2.next = 5;
              return regeneratorRuntime.awrap(connection.query(text, [id]));

            case 5:
              _ref5 = _context2.sent;
              rows = _ref5.rows;
              console.log(rows);
              return _context2.abrupt("return", res.send(rows));

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);
              return _context2.abrupt("return", res.status(400).send(_context2.t0));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 11]]);
    }
  }, {
    key: "update",
    value: function update(res, text, id) {
      var _ref6, rows;

      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              console.log(text);
              _context3.next = 4;
              return regeneratorRuntime.awrap(connection.query(text, [id]));

            case 4:
              _ref6 = _context3.sent;
              rows = _ref6.rows;
              return _context3.abrupt("return", res.send(rows));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(400).send(_context3.t0));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 9]]);
    }
  }, {
    key: "delete",
    value: function _delete(res, id) {
      var text, _ref7, rows;

      return regeneratorRuntime.async(function _delete$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              text = "delete from blog where id= $1";
              _context4.prev = 1;
              _context4.next = 4;
              return regeneratorRuntime.awrap(connection.query(text, [id]));

            case 4:
              _ref7 = _context4.sent;
              rows = _ref7.rows;
              return _context4.abrupt("return", res.send("row is deleted"));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);
              return _context4.abrupt("return", res.status(400).send(_context4.t0));

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[1, 9]]);
    }
  }, {
    key: "valueinsert",
    value: function valueinsert(path, res) {
      var text, _ref8, rows;

      return regeneratorRuntime.async(function valueinsert$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log("-------=-----", path);
              text = "insert into blog (title,author,category,date,image) values($1, $2, $3,$4,$5)";
              path[4] = "http://localhost:2000/" + path[4];
              console.log(path[4]);
              _context5.prev = 4;
              _context5.next = 7;
              return regeneratorRuntime.awrap(connection.query(text, path));

            case 7:
              _ref8 = _context5.sent;
              rows = _ref8.rows;
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](4);
              return _context5.abrupt("return", res.status(400).send(_context5.t0));

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[4, 11]]);
    }
  }]);

  return controller;
}(helper);

module.exports = {
  controller: controller
};