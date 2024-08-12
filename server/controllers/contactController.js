const { ZodError } = require('zod');
const User  = require('../models/userModel')
const mailSender = require('../utils/mailSender');
const userSchema = require('../utils/validations/userValidation');
const { z } = require('zod');

exports.submitForm = async (req,res)=>{
    try{
        const { data } = req.body;
        const vallidatedData = userSchema.parse(data);

        if( !data.firstName || !data.lastName || !data.email || !data.description || !data.contactNumber){
            return res.status(500).json({
                success:false,
                message:"all fields are required"
            })
        }        
        const saveUserData = await User.create({
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            contactNumber:data.contactNumber,
            body:data.description,
        });
        
        const mail = mailSender(data);
        res.status(200).json({
            success:true,
            message:'Data successfully saved'
        })
    }
    catch(error){
        console.log('Error while saving data',error);
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors.map((err) => err.message);
        
            console.log('Validation errors:', errorMessages);
        
            res.status(400).json({
                error: "Error occurred during saving data",
                messages: errorMessages,  
            });
        }
        
        else{
            res.status(500).json({
                error:"Error occured during saving data ",
                message:error.message
            })

        }
    }
}