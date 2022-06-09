const router = require('express').Router()
const Employee = require('../models/employee.model')

// GET /api/employees - untuk menampilkan semua employee
	
// GET /api/employees/:id - untuk menampilkan employee by id
	
// POST /api/employees/add - untuk menambah employee baru
	
// PATCH /api/employees/:id - update employee by id
	
// DELETE /api/employees/:id - hapus employee by id
router.post('/employee/add', async (req, res) => {
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

router.get('/employees', async (req, res) => {
    Employee.find({}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

router.get('/employees/:id', async (req, res) => {
    try {
        const data = await Employee.findById(req.params.id)
        res.send(data)
    }
    catch (err){
        res.status(500).send({message:err.message})
    }
});

module.exports = router