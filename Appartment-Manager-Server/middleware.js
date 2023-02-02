const jwt = require('jsonwebtoken')
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authentication'];
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({
                auth: false, message: "Unauthorized"
            })
        }
        else {
            res.userId = decoded.id
            next();
        }
    })
}