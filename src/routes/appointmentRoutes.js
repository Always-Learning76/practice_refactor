
const express = require('express');
const router = express.Router()
const Appointment = require('../models/appointmentSchema')


router.post('/appointment', (req, res) => {
    //capture id req body

    Appointment.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    category : req.body.category,
    description : req.body.description,
    time: req.body.time
    }, (err, newAppointment) => {
        if(err) {
            return res.status(500).json({err})
        } else return res.status(200).json({newAppointment})
    })
    
})

router.get('/appointment', (req, res) => {
    Appointment.find({}, (err, appointment) => {
        if(err) {
            return res.status(500).json({err})
        } else {
            return res.status(200).json({appointment})
        }
    })
})

router.get('/appointment/:id', (req, res) => {

    Appointment.findOne({_id: req.params.id}, (err, appt) => {
        if (err) {
            return res.status(500).json({err})
        } else {
            return res.status(200).json({appt})
        }
        

    })
    

    router.put('/appointment/:id', (req, res) => {
        Appointment.findByIdAndUpdate(req.params.id, {
            firstname : req.body.firstname,
            lastname : req.body.lastname
        }, (err, appointment) => {
            if(err) {
                return res.status(500).json({message : err})
            } else if (!appointment) {
                return res.status(400).json({message : "appt not found"})
            } else {
                appointment.save((err, savedbook) => {
                    if(err) {
                        return res.status(500).json({message : err})
                    } else {
                        return res.status(200).json({message : "book updated"})
                    }
                    
                }); 
            }
               
        })
    } )

})

module.exports = router