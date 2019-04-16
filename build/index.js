"use strict";

var _LinkedList = _interopRequireDefault(require("./classes/LinkedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initData = [];

for (var i = 1; i <= 10; i++) {
  initData.push(i);
}

var list = new _LinkedList["default"](initData);
list.logData();
var targetNode = list.find(6);
console.log(targetNode);
list.remove(2);
list.logData();