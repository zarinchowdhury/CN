const mongoose = require('mongoose');

const url = `mongodb+srv://zarinchowdhury6772:admin1234@cluster0.tc7gd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true`;

mongoose.connect(url, {
   
   
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))