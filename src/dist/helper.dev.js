"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NodeCache = require("node-cache");

var cache = new NodeCache();

var multer = require('multer');

var path = require('path');

var imagePath = path.join(__dirname, './uploads');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './src/uploads/');
  },
  filename: function filename(req, file, cb) {
    var originalExtension = path.extname(file.originalname);
    cb(null, file.originalname + originalExtension);
  }
});
var upload = multer({
  storage: storage
});

var helper =
/*#__PURE__*/
function () {
  function helper() {
    _classCallCheck(this, helper);
  }

  _createClass(helper, [{
    key: "addtocache",
    value: function addtocache(ip, value) {
      return regeneratorRuntime.async(function addtocache$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cache.set(ip, value);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "check_ip",
    value: function check_ip(ip) {
      return regeneratorRuntime.async(function check_ip$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(ip);
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                var re;

                if (ip) {
                  if (cache.has(ip)) {
                    re = 1;
                    console.log("ip exist");
                  } else {
                    re = 0;
                    console.log("ip not exist");
                  }

                  resolve(re);
                } else {
                  reject(new Error("ip undefined"));
                }
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "makequeryUpdate",
    value: function makequeryUpdate(body) {
      var obj, values, path;
      return regeneratorRuntime.async(function makequeryUpdate$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              obj = Object.keys(body);
              values = Object.values(body);
              return _context3.abrupt("return", new Promise(function (resolve) {
                obj.map(function (col, index) {
                  console.log(obj.length);

                  if ((index == obj.length - 1 || obj.length == 1) == 0) {
                    console.log(col, index);

                    if (!path) {
                      path = "".concat(col, "='").concat(values[index], "',");
                    } else {
                      path = path + "".concat(col, "='").concat(values[index], "',");
                    }
                  } else {
                    if (!path) {
                      path = "".concat(col, "='").concat(values[index], "'");
                    } else {
                      path = path + "".concat(col, "='").concat(values[index], "'");
                    }
                  }
                });
                var query = "update blog set ".concat(path, " where id= $1");
                resolve(query);
              }));

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "imageViewer",
    value: function imageViewer(req, res) {
      var image, imgpathfile;
      return regeneratorRuntime.async(function imageViewer$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(req.data);
              image = req.params.image;

              if (image) {
                _context4.next = 5;
                break;
              }

              res.status(400).send('Image name is missing');
              return _context4.abrupt("return");

            case 5:
              imgpathfile = path.join(imagePath, image);
              res.sendFile(imgpathfile, function (err) {
                if (err) {
                  res.status(404).send('Image not found');
                }
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "imageupoad",
    value: function imageupoad(req, res) {
      return regeneratorRuntime.async(function imageupoad$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve, reject) {
                setTimeout(function () {
                  upload.single('files')(req, res, function (err) {
                    if (err) {
                      console.log("file failed upload");
                      reject(err);
                    }

                    console.log("-----", req.file.originalname);
                    console.log("-----", req.body.data);
                    res.send('Files uploaded successfully.' + req.file + '');
                    var k = [req.file.originalname, req.body.data];
                    var values = req.body.data.split(",");
                    values.push(req.file.originalname);
                    console.log("[[[[[in an arrray]]]]", values);
                    resolve(values);
                  });
                }, 2000);
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return helper;
}();

module.exports = {
  helper: helper
};