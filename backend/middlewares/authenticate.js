import jwt from "jsonwebtoken";
import user from "../models/user.js";

const Authenticate = async(req,res,next) => {
    try{
        const token = req.cookies.jwtcookie;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await user.findOne({ _id: verifyToken._id, "tokens:token": token });

        if (!rootUser){ throw new Error('User not found') }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    } catch(err){
        res.send('Unauthorized: No token provided');
        console.log(err);
    }
};

export default Authenticate;