const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing, validateReview, isReviewAuthor} = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer( {storage} );

const listingController = require("../controllers/listings.js");



router.route("/")
.get(wrapAsync(listingController.index))
.post( 
isLoggedIn,
upload.single("listing[image]"),
validateListing,
 wrapAsync(listingController.createListing)
);

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show , Update and delete routes
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(
isLoggedIn,
isOwner,
upload.single("listing[image]"),
validateListing,
wrapAsync(listingController.updateListing))
.delete(
 isLoggedIn,
 isOwner,
 wrapAsync(listingController.destroyListing));


 //Edit Route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;
