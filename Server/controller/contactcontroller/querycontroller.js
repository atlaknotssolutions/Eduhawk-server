
// const Contact = require("../../module/contactmodule/contactmodule.js"); // adjust path
// const nodemailer = require("nodemailer");
// const axios = require("axios");


// const Createquery = async (req, res) => {
//   try {
//     const { name, email, phone, city, country } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_TO,
//       subject: "New MBBS Abroad Counselling Lead",
//       html: `
//         <h2>New Student Enquiry</h2>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Phone:</b> ${phone}</p>
//         <p><b>City:</b> ${city}</p>
//         <p><b>Interested Country:</b> ${country}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({
//       success: true,
//       message: "Form submitted successfully",
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: "Email sending failed",
//     });
//   }
// };

// const GetAllQueries = async (req, res) => {
//   try {

//     const queries = await Contact.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: queries.length,
//       data: queries,
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch queries",
//     });
//   }
// };

// const DeleteQuery = async (req, res) => {
//   try {

//     const deletedQuery = await Contact.findByIdAndDelete(req.params.id);

//     if (!deletedQuery) {
//       return res.status(404).json({
//         success: false,
//         message: "Query not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Query deleted successfully",
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Delete failed",
//     });
//   }
// };

// module.exports={
//     Createquery,
//     GetAllQueries,
//     DeleteQuery
// }

const Contact = require("../../module/querymodule/querymodule");
const nodemailer = require("nodemailer");

// Create Query
const Createquery = async (req, res) => {
  try {
    const { name, email, phone, city, country } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Phone are required",
      });
    }

    // Save in Database
    const newQuery = await Contact.create({
      name,
      email,
      phone,
      city,
      country,
    });

    // Mail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail Options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New MBBS Abroad Counselling Lead",
      html: `
        <h2>New Student Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Interested Country:</b> ${country}</p>
      `,
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: newQuery,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
};


// Get All Queries
const GetAllQueries = async (req, res) => {
  try {
    const queries = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: queries.length,
      data: queries,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch queries",
    });
  }
};


// Delete Query
const DeleteQuery = async (req, res) => {
  try {
    const deletedQuery = await Contact.findByIdAndDelete(req.params.id);

    if (!deletedQuery) {
      return res.status(404).json({
        success: false,
        message: "Query not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Query deleted successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};


module.exports = {
  Createquery,
  GetAllQueries,
  DeleteQuery,
};