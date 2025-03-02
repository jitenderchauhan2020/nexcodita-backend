// // controllers/inquiryController.js
// const Inquiry = require("../models/inquiry");

// // Store client inquiries
// const submitInquiry = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const inquiry = new Inquiry({ name, email, message });
//     await inquiry.save();
//     res.status(201).json({ message: "Inquiry submitted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// module.exports = { submitInquiry };

const Inquiry = require("../models/inquiry");

// Store client inquiries
const submitInquiry = async (req, res) => {
  try {
    console.log("Received Inquiry Request:", req.body); // Debugging Log

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("Validation Error: Missing Fields"); // Debugging
      return res.status(400).json({ message: "All fields are required" });
    }

    const inquiry = new Inquiry({ name, email, message });
    await inquiry.save();
    
    console.log("Inquiry Saved Successfully"); // Debugging
    res.status(201).json({ message: "Inquiry submitted successfully" });

  } catch (error) {
    console.error("Server Error:", error); // Debugging
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { submitInquiry };

