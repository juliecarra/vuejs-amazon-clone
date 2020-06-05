const express = require("express");
const router = new express.Router();

const Address = require("../models/Address");
const User = require("../models/User");
const middleware = require("../middlewares/auth");

const axios = require("axios");

router.post("/", middleware.isLoggedIn, (req, res) => {
  const {
    country,
    fullName,
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    deliverInstructions,
    securityCode,
  } = req.body;

  const newAddress = new Address({
    country,
    fullName,
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    deliverInstructions,
    securityCode,
    user: req.user._id,
  });

  newAddress.save((err, address) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });
    }
    return res.status(201).send({ success: true, address: address.toObject() });
  });
});

router.get("/", middleware.isLoggedIn, (req, res) => {
  Address.find({ user: req.user._id }).exec(function(err, addresses) {
    if (err)
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });

    res.status(200).json(addresses);
  });
});

router.get("/countries", async (req, res) => {
  try {
    let response = await axios.get("http://restcountries.eu/rest/v2/all");

    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", middleware.isLoggedIn, (req, res) => {
  Address.findById({ _id: req.params.id }).exec(function(err, address) {
    if (err)
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });

    res.status(200).json(address);
  });
});

router.patch("/:id", middleware.isLoggedIn, async (req, res) => {
  try {
    let updatedAddress = await Address.findOne({
      user: req.user._id,
      _id: req.params.id,
    });
    if (updatedAddress) {
      if (req.body.country) updatedAddress.country = req.body.country;
      if (req.body.fullName) updatedAddress.fullName = req.body.fullName;
      if (req.body.streetAdress)
        updatedAddress.streetAdress = req.body.streetAdress;
      if (req.body.city) updatedAddress.city = req.body.city;
      if (req.body.state) updatedAddress.state = req.body.state;
      if (req.body.zipCode) updatedAddress.zipCode = req.body.zipCode;
      if (req.body.phoneNumber)
        updatedAddress.phoneNumber = req.body.phoneNumber;
      if (req.body.deliveryInstructions)
        updatedAddress.deliveryInstructions = req.body.deliveryInstructions;
      if (req.body.securityCode)
        updatedAddress.securityCode = req.body.securityCode;

      await updatedAddress.save();

      res.status(200).json({
        success: true,
        message: "Address has been successfully updated.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", middleware.isLoggedIn, (req, res) => {
  Address.findByIdAndDelete({ user: req.user._id, _id: req.params.id }).exec(
    function(err, deletedAddress) {
      if (err)
        return res
          .status(500)
          .json({ message: "The server was unable to complete your request." });

      res.status(200).json(deletedAddress);
    }
  );
});

router.put("/default", middleware.isLoggedIn, (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.user._id },

    { $set: { address: req.body.id } },
    { new: true }
  ).exec(function(err, updatedAddress) {
    if (err)
      return res
        .status(500)
        .json({ message: "The server was unable to complete your request." });

    res.status(200).json(updatedAddress);
  });
});

module.exports = router;
