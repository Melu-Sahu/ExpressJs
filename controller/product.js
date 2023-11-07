

let fs = require('fs');
// const index = fs.readFileSync('../index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('../data.json', 'utf-8'));
const product = data.products



exports.getAllProduct = (req, res) => {
    res.json(product);
}


exports.getproduct = (req, res) => {
    const id = req.params.id;
    console.log(`Requested Product with ID ${id}`);
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            res.send(JSON.stringify(product[i]));
            res.end();
        }
    }
}


exports.createProduct = (req, res) => {
    const newProduct = req.body;
    product.push(newProduct);
    fs.writeFileSync('data.json', JSON.stringify(data))
    res.status(201).send(newProduct);
}

exports.replaceProduct = (req, res) => {
    let id = req.params.id;
    let updatedProduct = req.body;
    for (let i = 0; i < product.length; i++) {
        if (product[i].id === parseInt(id)) {
            product[i] = updatedProduct;
            fs.writeFileSync('data.json', JSON.stringify(data));
            break;
        }
    }
}

exports.updateProduct = (req, res) => {
    let id = req.params.id;
    let updateData = { ...req.body };
}
