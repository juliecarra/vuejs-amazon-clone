const express = require("express");
const router = new express.Router();

const passport = require("passport");
const bcrypt = require("bcrypt");

const middleware = require("../middlewares/auth");

const User = require("../models/User");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password)
    return res
      .status(422)
      .json({ message: "Provide an email and a password." });

  User.findOne({ email }).exec(function(err, user) {
    if (err)
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });

    if (user) return res.status(409).json({ message: "User already exists." });

    user = new User({
      name,
      email,
      password,
    });

    user.save();

    return res.status(201).send({
      success: true,
      user: user.toObject(),
      message: "New user is successfully registered.",
    });
  });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(422)
      .json({ message: "Provide an email and a password." });

  let user = User.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "User does not exist." });
  }

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(403).json({ message: "Wrong password." });
  }

  return passport.authenticate("local", (err, passportUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong." });
      return;
    }

    if (!passportUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(passportUser, (err) => {
      if (err) {
        res.status(500).json({ message: "Something went wrong." });
        return;
      }

      res.status(200).json(req.user);
    });
  })(req, res, next);
});

router.get("/user", middleware.isLoggedIn, async (req, res) => {
  User.findOne(req.user)
    .populate("address")
    .exec(function(err, user) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(user);
    });
});

router.patch("/user", middleware.isLoggedIn, async (req, res) => {
  try {
    let updatedUser = await User.findOneAndUpdate(
      {
        _id: req.user._id,
      },

      { new: true }
    );
    if (updatedUser) {
      if (req.body.name) updatedUser.name = req.body.name;
      if (req.body.email) updatedUser.email = req.body.email;
      if (req.body.password) updatedUser.password = req.body.password;

      await updatedUser.save();

      res.status(200).json(updatedUser);

      // res.status(200).json({
      //   success: true,
      //   message: "User has been successfully updated.",
      //   updatedUser,
      // });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "You are logged out." });
});

module.exports = router;
