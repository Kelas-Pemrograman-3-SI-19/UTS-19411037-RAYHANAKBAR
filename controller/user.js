const userModel = require('../model/user')

exports.register = (data) => {
    new Promise((resolve, reject) =>{
    }).then(() => {
            resolve({
                sukses: true
            ,    pesan: 'Anda telah berhasil melakukan aktivasi m-banking'
            })
        }).catch(() => {
            reject({
                sukses: false
            ,    pesan: 'Silahkan aktivasi ulang'
            })
        })
    }
