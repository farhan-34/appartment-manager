const db = require('../database')
const express = require('express')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
require('dotenv').config();



router.post('/login', (req, res) => {
    const { username, password } = req.body
    db.query('select * from users u where u.username = $1', [username],
        (err, result) => {
            try {
                if (!!err) {
                    res.status(500).send({ err: err.stack });
                }
                if (result.rowCount > 0) {
                    bycrypt.compare(password, result.rows[0].password, (error, response) => {
                        if (response) {
                            const id = result.rows[0].id
                            const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
                                expiresIn: 300,
                            })
                            res.status(201).json({
                                auth: true, accessToken: token, user: result[0]
                            })
                        } else {
                            res.status(200).send({ message: 'You credientials are not correct' })
                        }
                    })
                }
                else {
                    res.status(200).send({ message: "User doesn't exist" });
                }
            }
            catch{
                res.sendStatus(500)
            }
        }
    )
})

module.exports = router