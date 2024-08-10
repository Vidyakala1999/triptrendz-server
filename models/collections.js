
const mongoose = require('mongoose')



// admin schema
const adminSchema = new mongoose.Schema({
    uname: String,
    psw: String
})

const admins = new mongoose.model("admins", adminSchema)

// packageSchema
const packageSchema = new mongoose.Schema({
    title: String,
    place: String,
    duration: String,
    travellers: Number,
    image: String,
    rating: Number,
    price: Number,
    image1: String,
    image2: String,
    image3: String
})

const packages = new mongoose.model("packages", packageSchema)

// userSchema
const userSchema = new mongoose.Schema({
    uname: String,
    email: String,
    phn: Number,
    address: String,
    state: String,
    city: String,
    psw: String
})
const users = new mongoose.model("users", userSchema)

// user choice booking
const ubookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phn: Number,
    destination: String,
    duration: String,
    sdate: Date,
    travellers: Number
})

const ubookings = new mongoose.model("ubookings", ubookingSchema)

// packageBookings
const pbookingSchema = new mongoose.Schema({
    pid: String,
    name: String,
    email: String,
    phn: Number,
    sdate: Date,
    title: String,
    destination: String,
    duration: String,
    travellers: Number,
    price: Number
})

const pbookings = new mongoose.model("pbookings", pbookingSchema)

// reviews
const reviewsSchema = new mongoose.Schema({
    uid: String,
    uname: String,
    email: String,
    comments: String
})
const reviews = new mongoose.model("reviews", reviewsSchema)
// export model
module.exports = { admins, packages, users, ubookings, pbookings, reviews }