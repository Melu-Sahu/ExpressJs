let express = require("express");

// let fs = require('fs');
// const index = fs.readFileSync('./index.html', 'utf-8')
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const product = data.products
const morgan = require("morgan");
const productController = require("./controller/product");
const productRouter = express.Router()

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use("/api",productRouter);



// app.get("/products", productController.getAllProduct)
// .get("/product/:id", productController.getproduct)
// .post('/addProduct', productController.createProduct)
// .put("/product/:id", productController.replaceProduct)
// .patch("product/:id", productController.updateProduct);






app.listen(3500, () => console.log("Server started on 3500"));