const express = require("express");
const path = require("path");
const LogInCollection = require("./mongo"); 
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const templatePath = path.join(__dirname, '../templates');
const publicPath = path.join(__dirname, '../public');



app.use(express.static('public', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }));
  
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.redirect('/login'); 
});

app.get('/signup', (req, res) => {
    res.render('signup'); 
});
app.get('/About', (req, res) => {
    res.render('About'); 
});


app.get('/LinearSearch', (req, res) => {
    res.render('LinearSearch'); 
});


app.get('/SelectionSort', (req, res) => {
    res.render('SelectionSort'); 
});

app.get('/InsertionSort', (req, res) => {
    res.render('InsertionSort'); 
});

app.get('/Linked-list', (req, res) => {
    res.render('Linked-list'); 
});
app.get('/BinarySearch', (req, res) => {
    res.render('BinarySearch'); 
});

app.get('/BubbleSort', (req, res) => {
    res.render('BubbleSort'); 
});

app.get('/MergeSort', (req, res) => {
    res.render('MergeSort'); 
});

app.get('/array', (req, res) => {
    res.render('array'); 
});
app.get('/contact', (req, res) => {
    res.render('contact'); 
});


app.get('/login', (req, res) => {
    res.render('login'); 
});

app.post('/signup', async (req, res) => {
    const { Username, Email, Password } = req.body;

 
    if (!Username || !Email || !Password) {
        return res.status(400).send("All fields are required.");
    }

    const data = { Username, Email, Password };

    try {
        const existingUser = await LogInCollection.findOne({ Username });
        if (existingUser) {
            return res.send("User details already exist");
            
        } else {
            await LogInCollection.insertMany([data]);
            return res.status(201).render("home", { naming: Username });
        }
    } catch (e) {
        console.error(e);
        return res.send("Error during signup");
    }
});

app.post('/login', async (req, res) => {
    const { Username, Password } = req.body;

    
    if (!Username || !Password) {
        return res.status(400).send("Both fields are required.");
    }

    try {
        const user = await LogInCollection.findOne({ Username });
        if (user && user.Password === Password) {
            return res.status(201).render("home", { naming: `${Username}`});
        } else {
            return res.send("Incorrect Password or user does not exist");
        }
    } catch (e) {
        console.error(e);
        return res.send("Error during login");
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

