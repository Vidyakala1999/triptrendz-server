const mongoose = require('mongoose')


mongoose.connect(process.env.BASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Mongodb Atlas Connected");
}).catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err.message);
});



