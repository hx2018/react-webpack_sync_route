var express = require("express");
var router = express.Router();
var Mock = require("mockjs");

router.get("/", function (req, res) {
  var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    "list|1-10": [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        "id|+1": 1,
      },
    ],
  });
  res.sendJson(data, 200);
});

router.post("/save", function (req, res) {
  res.sendJson(req.body, 201);
});

module.exports = router;
