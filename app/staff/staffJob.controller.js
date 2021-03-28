const StaffJob = require("./staffJob.model");

exports.store = async (staffId, bookingId, start, end, isCompleted) =>
  await StaffJob.create({ staffId, bookingId, start, end, isCompleted });

exports.markAsCompleted = async (staffJobId) =>
  await StaffJob.findByIdAndUpdate(staffJobId, { isCompleted: true });
