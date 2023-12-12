const mongoose = require("mongoose");

const licenseAndCertificateEmployeeSchema = new mongoose.Schema({
  Text: String,
});

const licenseAndCertificateEmployee = mongoose.model(
  "license_and_certificates",
  licenseAndCertificateEmployeeSchema
);

module.exports = licenseAndCertificateEmployee;
