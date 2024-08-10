const { admins, packages, users, ubookings, pbookings, reviews } = require("../models/collections");

// LOGICS

// AdminLogin
const adminLogin = (req, res) => {
    const { uname, psw } = req.body
    admins.findOne({ uname, psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "login success",
                status: true,
                statusCode: 200,
                _id: user._id
            })
        }
        else {
            res.status(404).json({
                message: "Incorrect Login Details",
                status: false,
                statusCode: 404
            })
        }
    })
}

// userRegistration
const userSignUp = (req, res) => {
    const { uname, email, phn, address, state, city, psw } = req.body
    users.findOne({ email }).then(user => {
        if (user) {
            res.status(404).json({
                message: "User Already Exist",
                status: false,
                statusCode: 404
            })
        }
        else {
            newUser = new users({ uname, email, phn, address, state, city, psw })
            newUser.save()
            res.status(200).json({
                message: "User Registered",
                status: true,
                statusCode: 200
            })
        }
    })

}

// userLogin
const userLogin = (req, res) => {
    const { email, psw } = req.body
    users.findOne({ email, psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login Success",
                status: true,
                statusCode: 200,
                _id: user._id
            })
        }
        else {
            res.status(404).json({
                message: "Incorrect Login Details",
                status: false,
                statusCode: 404
            })
        }
    })
}


// addPackage
const addPackage = (req, res) => {
    const { title, place, duration, travellers, image, rating, price, image1, image2, image3 } = req.body

    // create object for package
    const newPackage = new packages({
        title, place, duration, travellers, image, rating, price, image1, image2, image3
    })
    // save in db
    newPackage.save()
    res.status(201).json({
        message: "New Package Added",
        status: true,
        statusCode: 201
    })
}

// getPackages
const getPackages = (req, res) => {
    packages.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

// getSinglePackage
const getPackage = (req, res) => {
    const { id } = req.params
    packages.findOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

// editPackage
const editPackage = (req, res) => {
    const { id } = req.params
    const { title, place, duration, travellers, image, rating, price, image1, image2, image3 } = req.body
    packages.findOne({ _id: id }).then(pdata => {
        if (pdata) {
            pdata.title = title,
                pdata.place = place,
                pdata.duration = duration,
                pdata.travellers = travellers,
                pdata.image = image,
                pdata.rating = rating,
                pdata.price = price,
                pdata.image1 = image1,
                pdata.image2 = image2,
                pdata.image3 = image3

            pdata.save()
            res.status(200).json({
                message: "Product Updated",
                status: true,
                statusCode: 200
            })
        }
    })
}

// deletePackage
const deletePackage = (req, res) => {
    const { id } = req.params
    packages.deleteOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: "Product Deleted",
                status: true,
                statusCode: 200
            })
        }
    })
}

// getUsers
const getUsers = (req, res) => {
    users.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

// deleteUser
const deleteUser = (req, res) => {
    const { id } = req.params
    users.deleteOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: "User Deleted",
                status: true,
                statusCode: 200
            })
        }
    })

}

// add userchoice booking
const ubooking = (req, res) => {
    const { name, email, phn, destination, duration, sdate, travellers } = req.body

    users.findOne({ email }).then(user => {
        if (user) {
            const newubooking = new ubookings({
                name, email, phn, destination, duration, sdate, travellers
            })
            newubooking.save()
            res.status(201).json({
                message: "Booking Successfull",
                status: true,
                statusCode: 201
            })
        }
        else {
            res.status(404).json({
                message: "Provide Registered Email Id",
                status: false,
                statusCode: 404
            })
        }
    })
}

// userbooking
const getAllUbooking = (req, res) => {
    ubookings.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}


// packagebooking
const packageBooking = (req, res) => {
    const { pid } = req.params
    const { name, email, phn, sdate } = req.body
    packages.findOne({ _id: pid }).then(pdata => {
        if (pdata) {
            newPBooking = new pbookings({
                pid,
                name,
                email,
                phn,
                sdate,
                title: pdata.title,
                destination: pdata.place,
                duration: pdata.duration,
                travellers: pdata.travellers,
                price: pdata.price
            })

            newPBooking.save()
            res.status(200).json({
                message: "Package Booking Successfull",
                status: true,
                statusCode: 200
            })
        }
    })
}

const getAllPBooking = (req, res) => {
    pbookings.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

const addReview = (req, res) => {
    const { uid, comments } = req.body
    users.findOne({ _id: uid }).then(data => {
        if (data) {
            newReview = new reviews({
                uid,
                comments,
                uname: data.uname,
                email: data.email
            })
            newReview.save()
            res.status(200).json({
                message: "Review Added",
                status: true,
                statusCode: 200
            })
        }
    })
}

const getReviews = (req, res) => {
    reviews.find().then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

const deleteReview = (req, res) => {
    const { id } = req.params
    reviews.deleteOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: "Review Deleted",
                status: true,
                statusCode: 200
            })
        }
    })
}

const getMyPackages = (req, res) => {
    const { email } = req.params
    pbookings.find({ email }).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

const getmybookings = (req, res) => {
    const { email } = req.params
    ubookings.find({ email }).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}

const deleteUserPackage = (req, res) => {
    const { id } = req.params
    pbookings.deleteOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: "Booking Cancelled",
                status: true,
                statusCode: 200
            })
        }
    })
}

const deleteUserChoice = (req, res) => {
    const { id } = req.params
    ubookings.deleteOne({ _id: id }).then(data => {
        if (data) {
            res.status(200).json({
                message: "Booking Cancelled",
                status: true,
                statusCode: 200
            })
        }
    })
}


// export logics
module.exports = {
    adminLogin, addPackage, getPackages, getPackage, editPackage,
    deletePackage, userSignUp, userLogin, deleteUser, ubooking, getAllUbooking, getUsers,
    packageBooking, getAllPBooking, addReview, getReviews, deleteReview, getMyPackages,
    getmybookings, deleteUserPackage, deleteUserChoice
}