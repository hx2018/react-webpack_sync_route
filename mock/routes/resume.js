const { message } = require("antd");
var express = require("express");
var router = express.Router();
const DATA_LIST = require("./data").list;

router.get("/list", function (req, res) {
  const data = DATA_LIST;
  res.sendJson(data, 200);
});

router.delete("/list/:id", function (req, res) {
  const { id } = req.params;
  const idx = DATA_LIST.findIndex((item) => item.id == id);
  DATA_LIST.splice(idx, 1);
  res.sendJson("", 200, "删除成功");
});

router.post("/update", function (req, res) {
  const { id, status } = req.body;
  const item = DATA_LIST.find((item) => item.id === id);
  item.status = status;
  res.sendJson("", 200, "更新成功");
});

module.exports = router;
