const router = require('express').Router()
const Employee = require('../models/employee.model')


router.post('/AddEmployee', async (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Phone = req.body.Phone;

    const employee = new EmployeeModel({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Address: Address,
        Phone: Phone
    });

    try {
        await employee.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

router.get('/viewAllEmployee', async (req, res) => {
    Employee.find({}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

router.get('/viewSingleEmployee/:id', async (req, res) => {
    const id = req.params.id;
    Employee.find({
        id
    }, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

module.exports = router