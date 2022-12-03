const mongoose = require("mongoose");
const registrationModel = require("../Model/userModel");
const bcrypt = require("bcrypt");

const getUser = async (req, res) => {
  try {
    const user = await registrationModel.find();
    res.status(200).json({
      message: "data created successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await registrationModel.findById(req.params.id);
    res.status(200).json({
      message: "data created successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  const { fullName, email, password, DateofBirth } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await registrationModel.create({
      fullName,
      email,
      password: hashed,
      DateofBirth,
    });

    res.status(200).json({
      message: "data created successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const signUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await registrationModel.findOne({ email });

    if (user) {
      const check = await bcrypt.compare(password, user.password);

      if (check) {
        const { ...info } = user._doc;

        res.status(200).json({
          message: "User is signin",
          data: info,
        });
      } else {
        res.status(400).json({ message: "password is not correct" });
      }
    } else {
      res.status(400).json({ message: "user is not correct" });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUser,
  createUser,
  signUser,
  getOneUser,
};
