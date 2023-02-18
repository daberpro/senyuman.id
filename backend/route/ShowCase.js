const express = require('express');
const Server = express.Router();
const { query } = require('../db.js');
const fs = require("fs");
const { UploadShowCaseImage } = require('./Upload-Files.js');

Server.use((req, res, next) => next());

// GET ALL SERVICES
Server.get("/get", (req, res) => {

    query(`
        SELECT * FROM show_case;
    `, (err, _res) => {
        if (err) {
            console.log(err);
            res.json({
                message: 'failed to get data'
            });
            return;
        }

        if (_res) {
            console.log(_res);
            res.json(_res);
        }

    });

});

// DELETE SERVICES
Server.delete("/delete", (req, res) => {

    if ('index' in req.body) {

        query(`
            DELETE FROM show_case WHERE id = ${req.body.index};
        `, (err, _res) => {
            if (err) {
                res.status(400).send({
                    message: "did you send a valid data?"
                });
            }

            if (_res) {
                res.status(200).send({
                    message: "success to delete index " + req.body.index
                });
            }

        });

    } else {
        res.status(400).send({
            message: "Index Must Be Exits"
        });
    }
})

// UPDATE SERVICES
Server.post("/update", (req, res) => {

    if (req.headers.accept === 'application/json') {

        const body = req.body || {};
        console.log(Object.keys(body).length);
        if (Object.keys(body).length > 0) {

            query(`
            UPDATE show_case
            SET ${Object.keys(body).filter(d => (d !== "index")).map((d, i) => {
                return `${d} = ${(typeof body[d] === 'number') ? body[d] : `"${body[d]}"`}`;
            }).join(",").replace(/\,$/igm, "")}
            WHERE id = ${body.index};
            `, (err, _res) => {
                if (err) {
                    console.log(err);
                    res.status(400).send("Hmmm did you send the valid data?");
                }

                if (_res) {
                    res.status(200).json({
                        message: "success to update data on index " + body.index
                    });
                }
            });

            return;

        }

        res.status(400).send("Hmmm did you sent what it needed?");
        return;
    }

    res.status(400).send("Bad request");

});

// ADD SERVICES
Server.post("/add", (req, res) => {

    if (req.headers.accept === 'application/json') {

        const body = req.body || {};
        if ('title' in body && 'description' in body && 'url' in body && 'image' in body) {

            query(`
            INSERT INTO show_case
            (title,description,url,image) 
            VALUES
            ("${body.title}","${body.description}","${body.url}","${body.image}");
            `, (err, _res) => {

                if (err) {
                    console.log(err);
                    res.status(400).json({
                        message: 'Failed to add data'
                    });
                }

                if (_res) {
                    res.status(200).json({
                        message: 'success to add data'
                    });
                }

            });
            return;

        }

        res.status(400).send("Bad Request");
        return;
    }

    res.status(400).send("Bad Request");

});

Server.post("/delete-avatar", (req, res) => {

    if ('index' in req.body) {
        query(`
        SELECT * FROM show_case
        WHERE id = ${req.body.index};
        `, (err, _res) => {
            console.log(fs.existsSync(__dirname + '/../assets/testimonials/' + _res[0].avatar))
            if (fs.existsSync(__dirname + '/../assets/testimonials/' + _res[0].avatar)) {
                fs.unlinkSync(__dirname + '/../assets/testimonials/' + _res[0].avatar);

                query(`
                UPDATE show_case
                SET avatar = "${req.body.avatar}"
                WHERE id = ${req.body.index};
                `, (err, _res) => {
                    if (err) {
                        res.status(400).send({
                            message: "did you send a valid data?"
                        });
                    }

                    if (_res) {
                        res.status(200).send({
                            message: "success to delete index " + req.body.index
                        });
                    }

                });

            } else {
                res.status(500).send(`File not found!!!`);
            }
        });
    } else {
        res.status(400).send({
            message: "Index Must Be Exits"
        });
    }
});

const uploadShowCaseImage = UploadShowCaseImage();
Server.post("/upload-image", uploadShowCaseImage.single('avatar'), (req, res) => {

    if (req.file) {
        res.status(200).json({
            message: "success to upload image",
            filename: req.file.filename,
            path: req.file.path
        });
    } else {
        res.status(400).send("Did you uploaded an image?");
    }

});

module.exports = {
    ShowCaseMiddleware: Server,
};