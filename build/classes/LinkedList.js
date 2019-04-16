"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _LinkedListNode = _interopRequireDefault(require("./LinkedListNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, LinkedList);

    this.root = null;

    if (items.length > 0) {
      for (var i = 0; i < items.length; i++) {
        this.push(items[i]);
      }
    }
  }

  _createClass(LinkedList, [{
    key: "push",
    value: function push(data) {
      if (this.root === null) {
        this.root = new _LinkedListNode["default"](data);
        return;
      }

      var curNode = this.root;

      while (curNode.next !== null) {
        curNode = curNode.next;
      }

      curNode.next = new _LinkedListNode["default"](data);
      this.length++;
    }
  }, {
    key: "find",
    value: function find(data) {
      if (this.root === null) return;
      var curNode = this.root;

      while (curNode !== null) {
        if (curNode.data === data) return curNode;
        curNode = curNode.next;
      }

      return null;
    }
  }, {
    key: "remove",
    value: function remove(data) {
      if (this.root === null) return;

      if (this.root.data === data) {
        this.root = this.root.next;
        return;
      }

      var curNode = this.root.next;
      var prevNode = this.root;

      while (curNode !== null) {
        if (curNode.data === data) {
          prevNode.next = curNode.next;
          return curNode;
        }

        prevNode = curNode;
        curNode = curNode.next;
      }
    }
  }, {
    key: "logData",
    value: function logData() {
      if (this.root === null) return;
      var curNode = this.root;

      while (curNode) {
        console.log(curNode.data);
        curNode = curNode.next;
      }
    }
  }]);

  return LinkedList;
}();

exports["default"] = LinkedList;