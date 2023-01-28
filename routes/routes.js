const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/signupmodels')
//const bcrypt = require('bcrypt')

//router.post('/signup', async (request, response) =>{
router.post('/signup', (request, response) =>{

   // const saltPassword = await bcrypt.genSalt(10)
    //const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedupUser = new signupTemplateCopy({
        fullName:request.body.fullName,
        email:request.body.email,
        username:request.body.username,
        password:request.body.password
        //password:securePassword
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