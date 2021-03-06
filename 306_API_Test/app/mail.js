//import nodemailer module
var nodemailer = require('nodemailer');

exports.mailScript = function (room_id, current_ppl){

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'aol',
    auth: {
        user: 'ur3cadm1n@aol.com',
        pass: 'isat306sec1'
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'UREC Admin <ur3cadm1n@aol.com>', 
    to: 'roseph@dukes.jmu.edu', 
    subject: 'UREC Alert: Maximum Capacity Reached',
    html: '<b>Hello Admin,<br><br>'
	+ 'The maximum capacity of the following rooms has been reached: </b><br>'
	+ 'Room ID: ' + room_id + ' Current Occupancy: ' + current_ppl
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});

}

