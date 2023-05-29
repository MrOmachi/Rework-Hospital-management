const Hospital = require("../models/hospitals");

const getAllHospital = async (req, res) => {
  try {
    let hospitals = await Hospital.find();
    const hospitalData = hospitals.map((hospital) => ({
      id: hospital._id,
      prefix: hospital.prefix,
      email: hospital.email,
      logo: hospital.logo,
    }));
    res.json({ message: "success", data: hospitalData });
  } catch (error) {
    res.send("Server error occurs");
  }
};

const getOneHospital = async (req, res) => {
  console.log(req.params);
  try {
    let hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      res
        .status(404)
        .json({ status: "failed", message: "No hospital with such id" });
    }
    res
      .status(200)
      .json({ status: "success", message: "Found hospital", data: hospital });
  } catch (error) {
    console.log(error);
    res.send("Server error occurs");
  }
};

const createHospital = async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    if (req.files) {
      req.files.map((e) => {
        switch (e.fieldname) {
          case "logo":
            hospital.logo = e.filename;
            break;
        }
      });
    }
    await hospital.save();
    const {
      password,
      createdAt,
      updatedAt,
      __v,
      _id: id,
      ...others
    } = hospital.toObject();
    res.status(200).json({
      status: "Success",
      message: "Hospital created successfully",
      data: { id: hospital._id, ...others },
    });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

module.exports = { getAllHospital, getOneHospital, createHospital };
