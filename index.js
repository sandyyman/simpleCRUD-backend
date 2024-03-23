const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require("./models/product.model.js")
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// //routes
app.use('/api/products', productRoute);

// mongoose.connect('mongodb+srv://sandeepkumar4402:9mLDxDCn8HICDwga@backenddb.bcc4qpn.mongodb.net/NewNode-API?retryWrites=true&w=majority&appName=BackendDB')
//     .then(() => console.log('Connected TO DB!'))
//     .catch(() => {
//         console.log("COnnection failed");
//     });

app.get('/', (req, res) => {
    res.send("Hello from API");
});


//save in db
// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

//update product 

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if (!product) {
//             res.status(404).json({ message: "Not found" });
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



//retreive data from db
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }
//     catch {
//         res.status(500).json({ message: error.message });
//     }
// });



//retreive data from db by ID
// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


//delete a product
// app.delete('/api/products/:id/', async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             res.status(400).json({ message: "Product not found" });
//         }
//         res.status(200).json({ message: "Product deleted" });
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


mongoose.connect('mongodb+srv://sandeepkumar4402:XsF2gszMXbz7UegF@cluster0.hbvbmxr.mongodb.net/NewNode-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected TO DB!');
        app.listen(5500, () => {
            console.log("Server live");
        });
    })
    .catch((err) => {
        console.error("Connection failed:", err);
    });