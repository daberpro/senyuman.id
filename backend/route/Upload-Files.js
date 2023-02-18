const multer = require("multer");
const express = require("express");
const path = require("path");

const fileFilter =  (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if(ext !== '.jpg' && ext !== '.png' && ext !== '.jpeg'){
        cb(null, false);
    }else{
        cb(null, true);
    }
}

const UploadTestimonialsAvatar = () => {

    const diskStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "../assets/testimonials"));
        },
        filename: function (req, file, cb) {
            cb(
                null,
                file.fieldname + path.extname(file.originalname)
            );
        },
    });

    const upload = multer({
        storage: diskStorage,
        fileFilter,
    });

    return upload;

}

const UploadShowCaseImage = () => {

    const diskStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "../assets/show_case"));
        },
        filename: function (req, file, cb) {
            cb(
                null,
                Date.now() + path.extname(file.originalname)
            );
        },
    });

    const upload = multer({
        storage: diskStorage,
        fileFilter,
    });

    return upload;

}

const UploadUiKitImage = () => {

    const diskStorage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "../assets/show_case"));
        },
        filename: function (req, file, cb) {
            cb(
                null,
                file.fieldname + path.extname(file.originalname)
            );
        },
    });

    const upload = multer({
        storage: diskStorage,
        fileFilter,
    });

    return upload;

}

module.exports = {
    UploadTestimonialsAvatar,
    UploadShowCaseImage,
    UploadUiKitImage,
};