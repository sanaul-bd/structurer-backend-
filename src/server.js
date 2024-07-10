const { app } = require(".");
require('dotenv').config();
const PORT = process.env.PORT;
const connectDB = require("./config/db.js");

app.get('', (req, res)=> {
    res.status(200).send('welcome welcome....')
});



app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is running on  port ....${PORT} 👌👌👌`)
});