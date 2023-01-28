const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/signupmodels')

router.post('/signup', (request, response) =>{
    const signedupUser = new signupTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        username:request.body.username,
        password:request.body.password
    })
    signedupUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router