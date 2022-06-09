const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const EmployeeModel = require('./models/Employee');

app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.hhsrdzp.mongodb.net/Employee?retryWrites=tr' +
            'ue&w=majority',
    {useNewUrlParser: true}
);

app.post('/AddEmployee', async (req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Phone = req.body.Phone;

    const employee = new EmployeeModel(
        {FirstName: FirstName, LastName: LastName, Email: Email, Address: Address, Phone: Phone}
    );

    try {
        await employee.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.get('/viewAllEmployee', async (req, res) => {
    EmployeeModel.find({}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

app.get('/viewSingleEmployee/:id', async (req, res) => {
    const id = req.params.id;
    EmployeeModel.find({id}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
});

app.listen(3001, () => console.log('Listening on port 3001'));