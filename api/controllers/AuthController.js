import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
        // return res.status(400).json({message:"All fields are required"});
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
    next(error);
}
    

}