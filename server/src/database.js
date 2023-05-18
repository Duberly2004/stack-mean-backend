import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/stack-mean',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log('Database is connected'));