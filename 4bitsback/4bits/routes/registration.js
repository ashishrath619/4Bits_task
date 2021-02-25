var express = require("express");
var router = express.Router();
var pool = require("./pool");
/* GET home page. */

// Add user for signup
router.post("/add", function (req, res, next) {
  // console.log(req.body);
  pool.query(
    "insert into registration (name,email,mobile,password,dob,gender) values(?,?,?,?,?,?) ",
    [
      req.body.name,
      req.body.email,
      req.body.mobile,
      req.body.password,
      req.body.dob,
      req.body.gender,
    ],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ data: [] });
      } else {
        return res.status(200).json({ data: result });
      }
    }
  );
});

module.exports = router;
