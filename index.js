const express = require('express')
const app = express()
const mongoose = require ('mongoose')

const mongoURL = 'mongodb://localhost:27017/RegistrasiMbanking'
mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true
}).then(() => {
    console.log('berhasil konek ke database')
}).catch(() => {
    console.log('gagal konek ke database')
})
app.use('/user',require('./routes/user'))

app.listen(5000, function (){
    console.log('server telah dijalankan di port 5000')
})