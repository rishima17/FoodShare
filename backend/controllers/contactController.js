import Contact from "../models/contact.js";

export const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newContact = new Contact({ firstName, lastName, email, phone, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
