const express = require("express");
const app = express();
const router = express.Router();

// 下面两个是处理req.body的中间件，use会处理每一个在这两条命令之后定义的所有请求（在中间件之前定义的请求不会用到中间件，即app.use和app.get和app.post等命令都会往app._router.stack有序对象【该对象类似数组结构，里面元素都是Layer对象，即所有元素是有序分层且按照顺序处理所有请求】push元素【这里的中间件是urlencodedParser和jsonParser对象】，如果某个app.get路由在urlencodedParser对象之前定义，则会先执行该路由定义时的回调）
// use用途：1、可作为请求拦截器；2、可作为请求中间件，如：处理所有请求的返回数据格式等【类似python tornado框架的prepare函数，注意：需要调用next()以继续执行对于的路由请求】；3、可定义父级路由【app.use/route.use只要匹配上父级路由，都会执行回调, app.get/route.get则是精确匹配子路由】
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// 给每个请求的res参数加两个处理数据的函数,每个请求先执行该函数
app.use(function (req, res, next) {
  res.sendJson = function (data, status, message) {
    res.json({
      status: status || 0,
      message: message || "success",
      data,
    });
  };
  res.sendError = function (data, message, status = 1) {
    res.status(401);
    res.json({
      status,
      message,
      data,
    });
  };
  next();
});

// 设置cors解决跨域问题,中间件
// app.use("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
//   );
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

//   if (req.method == "OPTIONS") {
//     res.send(200);
//     /让options请求快速返回/;
//   } else {
//     next();
//   }
// });

app.get("/", (req, res) => {
  res.send("hello my app");
});

app.use("/api/counter", require("./routes/counter"));
app.use("/api/resume", require("./routes/resume"));

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("app listening at http://%s:%s\n", host, port);
  console.log("----routes:", app._router.stack);
});
