'use strict'

var nodemailer = require('nodemailer');


function sendMail(req, res) {
    var params = req.body
    var emisor = params.email // aca va el mail del comentario
    var destinatario = "centrodeyogasadhana@gmail.com" // aca va el mail de yoga
    var asunto = "Comentario de " + params.nombre + " " + params.asunto + " enviado desde la app"
    var texto = "Nombre: " + params.nombre + " " + "\n\nEmail: " + params.email + "\n\nComentario: " + params.mensaje
    var mailOptions = {
        from: emisor,
        to: destinatario,
        subject: asunto,
        text: texto,
        attachments: []
    }
    var pic = params.picture
    if (pic) {
        mailOptions.attachments.push({
            filename: 'picture.jpeg',
            content: pic,
            encoding: 'base64'
        })
    }
    var voiceAudio = params.audio
    if (voiceAudio) {
        voiceAudio = voiceAudio.split("data:image/*;charset=utf-8;base64,")[1];
        // console.log(voiceAudio);
        mailOptions.attachments.push({
            filename: 'voiceAudio.mp3',
            content: voiceAudio,
            encoding: 'base64'
        })
    }

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {

            user: 'centrodeyogasadhananeuquen@gmail.com', // ACA COLOCAR EL MAIL Y PASS DEL GMAIL DE YOGA 
            pass: 'sadhananeuquen123',
        }
    })


    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(500).send({ message: err.message });
        } else {
            console.log('Mail enviado');
            res.status(200).send({ message: 'Mail enviado' });
        }
    })
    texto = "Muchas gracias por contactarte con nosotros. En breve nos estaremos comunicando. \n Atentemente Buenos Vientos \n \n wwww.buenosvientos.com.ar"
    asunto = " Buenos Vientos" /* Yoga sadhana */

    var mailOptions = {
        from: destinatario,
        to: emisor,
        subject: asunto,
        text: texto,
        attachments: []
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(500).send({ message: err.message });
        } else {
            console.log('Mail enviado');
            res.status(200).send({ message: 'Mail enviado' });
        }
    })



}

module.exports = {
    sendMail
}