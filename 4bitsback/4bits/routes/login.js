var express = require("express");
var pool = require("./pool");
var router = express.Router();

/* login */

router.post("/chklog", function (req, res, next) {
  pool.query(
    "select  * from registration where email=? and password=?",
    [req.body.email, req.body.password],
    function (error, result) {
      if (error) {
        console.log(error);
        return res.status(500).json({ data: false, message: "server error" });
      } else {
        if (result.length === 1) {
          console.log(result);

          return res
            .status(200)
            .json({ data: true, message: " login success" });
        } else {
          return res
            .status(200)
            .json({ data: false, message: "invalid email /password" });
        }
      }
    }
  );
});
module.exports = router;
