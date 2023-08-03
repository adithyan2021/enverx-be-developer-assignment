"use strict";

var express = require('express');

var cors = require("cors");

var _require = require('./src/controller'),
    controller = _require.controller;

var con = new controller();
var app = express();
app.use(express.json());
app.use(cors());
app.get("/", function (req, res) {
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.addtocache(ip, Date.now());
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.addtocache(ip, Date.now());
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.get('/posts', function (req, res) {
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.getall(res, "post");
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.get('/posts/author/:name', function (req, res) {
  console.log("in posts", req.params.name);
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.getall(res, "author", req.params.name);
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.get('/posts/date/:name', function (req, res) {
  console.log("in posts", req.params.name);
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.getall(res, "date", req.params.name);
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.get('/posts/category/:name', function (req, res) {
  console.log("in posts", req.params.name);
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.getall(res, "category", req.params.name).then(function (resu) {});
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.get('/posts/:id', function (req, res) {
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.getsingle(res, req.params.id);
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.put('/posts/:id', function (req, res) {
  var body = req.body;
  var id = req.params.id;
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con.makequeryUpdate(body).then(function (result) {
        con.update(res, result, id);
      });
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app["delete"]('/posts/:id', function (req, res) {
  var id = req.params.id;
  var ip = req.ip;
  console.log(ip, req.path);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      con["delete"](res, id);
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.post('/posts/', function (req, res) {
  var ip = req.ip;
  console.log(ip, req.file);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      console.log(req.data);
      con.imageupoad(req, res).then(function (result) {
        console.log("in post condition", result); // console.log("in post condition",result[0],result[1])
        //    con.valueinsert(result[0],result[1]);

        con.valueinsert(result, res);
      });
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
app.get('/:image/', function (req, res) {
  var ip = req.ip;
  console.log(ip, req.file);
  con.check_ip(ip).then(function (result) {
    if (result == 0) {
      //TODO NEEDED TO ADD SOME MORE TO VALUES 
      console.log("id does not exist");
      return res.status(404).send("ip doesnt exist");
    } else {
      con.imageViewer(req, res);
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
var pt = 2000;
app.listen(pt, "0.0.0.0");
console.log('app is running on port ', pt);