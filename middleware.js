let express = require("express");

let fs = require('fs');

const index = fs.readFileSync('./index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products




const app = express();


// Middleware concept

// app.use((req, res, next)=>{
//     console.log(req.ip, req.hostname, req.url, req.method);
//     // console.log(req.headers);

//     req.next();             // will send the request to next step. If this will not, req will remain here.
// })                  // It is a kind of logger middleware.



const auth = (req, res, next) => {


    if (req.query.password === 'melu') {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.use(express.urlencoded({extended:true}));
app.use(auth);


app.use((req, res,next)=>{
    fs.writeFileSync("./logs.txt",req.ip, req.url, req.hostname, '\n');
    req.next();
});


app.get('/', (req, res) => {

    res.json({ message: "Hellow Mr. Hydrozen Bomb. Tu food dega. Just Believe on yourself." });


})


app.use(express.static("public"));      // This line will host index.html file from public folder.





app.listen(3400, () => console.log("Server started at 3400"));