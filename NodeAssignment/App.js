const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://pratiksha_24:RwMk0sHT0ZiMBqHH@nodeassignment.msjatee.mongodb.net/')

const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
});
const User = mongoose.model('User', UsersSchema);

app.get('/', (req, res) => {
    res.send('Welcome User');
});

app.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get('/users/:name', async (req, res) => {
    const { name } = req.params;
    const users = await User.find({ name });
    res.send(users);
});

app.delete('/users/delete',async(req,res)=>{
    const {name}=req.params;
    const users = await User.findOneAndDelete({name});
    res.send(users);
});

app.post('/add', async (req, res) => {
    const { name, email, mobile } = req.body;
    const newUser = new User({ name, email, mobile });
    await newUser.save();
    res.send({ message: 'User added successfully', user: newUser });
});

app.delete('/delete/:name',async(req,res)=>{
    const {name}=req.params;
    const users = await User.findOneAndDelete({ name });
    res.send(users);
});

app.put('/update/:name', async (req, res) => {
    const { name } = req.params;
    const { email, mobile } = req.body;
    const users = await User.findOneAndUpdate({ name },{ email, mobile },{ new: true });
    res.send({ message: "User updated successfully", users });
});

app.listen(3000, () => {
    console.log("Server Running on port 3000");
});