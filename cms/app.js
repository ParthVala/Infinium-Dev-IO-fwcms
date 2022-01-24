const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hlayer1 = require('./routes/hlayer1');
const homelayer2 = require('./routes/homelayer2');
const homelayer21 = require('./routes/homelayer21');
const homelayer3 = require('./routes/homelayer3');
const homelayer31 = require('./routes/homelayer31');
const homelayer4 = require('./routes/homelayer4');
const homelayer41 = require('./routes/homelayer41');
const ourServicelayer1 = require('./routes/ourServicelayer1');
const ourServicelayer2 = require('./routes/ourServicelayer2');
const ourServicelayer3 = require('./routes/ourServicelayer3');
const ourServicelayer31 = require('./routes/ourServicelayer31');
const careerslayer1 = require('./routes/careerslayer1');
const careerslayer2 = require('./routes/careerslayer2');
const careerslayer3 = require('./routes/careerslayer3');
const careerslayer4 = require('./routes/careerslayer4');
const careerslayer41 = require('./routes/careerslayer41');
const careerslayer5 = require('./routes/careerslayer5');
const contactUslayer1 = require('./routes/contactUslayer1');
const contactUslayer2 = require('./routes/contactUslayer2');
const contactUslayer3 = require('./routes/contactUslayer3');
const cors = require('cors')

const app = express();

/* Configure mongoose to connect to MongoDB */
mongoose.connect("mongodb+srv://user1:user1@cluster0.jfjea.mongodb.net/cms?retryWrites=true&w=majority", {useUnifiedTopology: true, 
useNewUrlParser: true, socketTimeoutMS: 30000, keepAlive: true})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

/* Configure Express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads', express.static('uploads'));


app.use(
    cors({
      credentials: true,
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "https://infinium-devio-fwcms.herokuapp.com"
      ],
    })
  );


app.use('/hlayer1', hlayer1);
app.use('/homelayer2', homelayer2);
app.use('/homelayer21', homelayer21);
app.use('/homelayer3', homelayer3);
app.use('/homelayer31', homelayer31);
app.use('/homelayer4', homelayer4);
app.use('/homelayer41', homelayer41);
app.use('/ourServicelayer1', ourServicelayer1);
app.use('/ourServicelayer2', ourServicelayer2);
app.use('/ourServicelayer3', ourServicelayer3);
app.use('/ourServicelayer31', ourServicelayer31);
app.use('/careerslayer1', careerslayer1);
app.use('/careerslayer2', careerslayer2);
app.use('/careerslayer3', careerslayer3);
app.use('/careerslayer4', careerslayer4);
app.use('/careerslayer41', careerslayer41);
app.use('/careerslayer5', careerslayer5);
app.use('/contactUslayer1', contactUslayer1);
app.use('/contactUslayer2', contactUslayer2);
app.use('/contactUslayer3', contactUslayer3);

app.get('/', (req, res) => {
    res.send("Hello There !");
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
});