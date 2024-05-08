import Admin from "../models/Admin.js";
import bcrypt from 'bcryptjs';

export const addAdmin = async (req, res, next) => {

    const { email, password } = req.body;
    if (!email && email.trim() === '' && !password && password.trim() === '') {
        return res.status(422).json({ message: "Invalid Inputs" })
    }

    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });

    } catch (error) {
        return console.log(error)
    }

    if (existingAdmin) {
        return res.status(400).json({ message: 'admin already exist' });
    }

    let admin;
    const hashedPassword = bcrypt.hashSync(password);
    try {
        admin = new Admin({ email, password: hashedPassword });
        admin = await admin.save();
    } catch (error) {
        return console.log(error)
    }

    if (!admin) {
        return res.status(500).json({ message: 'Unexpected to store admin' });
    }
    return res.status(201).json({ admin })

}

export const adminLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email && email.trim() === '' && !password && password.trim() === '') {
        return res.status(422).json({ message: "Invalid Inputs" })
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });
    } catch (error) {
        return console.log(error);
    }

    if (!existingAdmin) {
        return res.status(400).json({ message: "Admin not found" });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingAdmin.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Password" })
    }

    return res.status(200).json({ message: "Authentication complete" })
}