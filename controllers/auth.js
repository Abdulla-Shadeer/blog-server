import user from "../models/users.js"
import jwt from 'jsonwebtoken'
import mongoose from "mongoose"


//login authentication and cookie parsing
const authentication = async (req, res) => {
    try {
        const result = await user.findOne({ username: req.body.username, password: req.body.password })

        if (result === null) {
            //user not found
            // wc => wrong credentials
            res.json({message:"wc"})
        }
        else if (result.role == "admin") {

            const token = jwt.sign({ userId: result._id, userName: result.username }, process.env.JWTADMIN)
            res.json({message: "ok", "access_token":token}) //admin user
            //res.cookie("access_token",token).send("ok")

        }
        else if (result.role == "demo") {
            //demo user
            // nu => normal user
            const token = jwt.sign({ userId: result._id, userName: result.username }, process.env.JWTDEMO)
            res.json({message: "ok", "access_token":token})
        } else {
            //error
            res.json({message:"something went wrong!"})
            console.log("error")
        }

    } catch (error) {
        res.send("err")
    }


}

//login authenticated 
export default authentication



//CRUD authentication 
export const isAdmin = (req, res, next) => {
    
    //need to insert "token" header while requesting CRUD operations
    const token = req.headers.token

    if (!token) {
        // na => not authenticated
        res.send("na")
    }
    else {
        //verify token
        jwt.verify(token, process.env.JWTADMIN, (err, result) => {
            if (err) {
                // nv => not valid
                res.send("nv")
            } else {
                next()
            }
        })
    }
}

export const userRegister = async (req, res) => {
    const newUser = new user(
        {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
    const savedUser = await newUser.save({ new: true }).then(console.log("done"))
    res.send(savedUser)
}
