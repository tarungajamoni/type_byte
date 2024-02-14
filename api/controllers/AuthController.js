import User from "../models/User.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({message:"All fields are required"});
    }
    // // else {
    //     return res.status(200).json(req.body);
    // } 

const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })
try {
    await newUser.save();
    res.json('Signup SUccessful')
} catch (error) {
    res.status(500).json({message:error.message})
}
    

}