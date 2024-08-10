const express = require('express')
const { adminLogin, addPackage, getPackages, getPackage,
    editPackage, deletePackage, userSignUp, userLogin, 
    ubooking, getUsers, packageBooking, getAllPBooking, addReview, getReviews, deleteReview, deleteUser, getAllUbooking, getMyPackages, getmybookings, deleteUserPackage, deleteUserChoice } = require('../controllers/logic')
const router = new express.Router()

// adminlogin()
router.post('/admin/login', adminLogin)

// addPackage
router.post('/admin/add-package', addPackage)

// getPackages
router.get('/admin/packages-access', getPackages)

// getSinglePackge
router.get('/singleproduct-access/:id', getPackage)

// editProduct
router.put('/product-update/:id', editPackage)

// deletePackage
router.delete('/package-delete/:id', deletePackage)

// user registration userSignUp
router.post('/user-register', userSignUp)

// userLogin
router.post('/user-login', userLogin)

// getUsers
router.get('/admin/users-access', getUsers)
router.delete('/users-delete/:id', deleteUser)

// user booking
router.post('/user/add-booking', ubooking)
router.get('/admin/user-choice-booking', getAllUbooking)


// packageBooking
router.post('/user/package-booking/:pid', packageBooking)

// getAll packageBookings
router.get('/admin/pbooking-access', getAllPBooking)

// Review
router.post('/user/add-review',addReview)
router.get('/user/reviews-access', getReviews)
router.delete('/review-delete/:id', deleteReview)

router.get('/user/my-bookings/:email',getMyPackages)
router.get('/user/choice-bookings/:email',getmybookings)

router.delete('/user/package-delete/:id', deleteUserPackage)
router.delete('/user/choice-delete/:id', deleteUserChoice)



module.exports = router