const express = require("express");
const router = new express.Router();

const middleware = require("../middlewares/auth");
const Order = require("../models/Order");

router.get("/", middleware.isLoggedIn, (req, res) => {
  Order.find({ owner: req.user._id })
    .deepPopulate("owner products.id.owner")
    .exec(function(err, orders) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(orders);
    });
});

module.exports = router;
