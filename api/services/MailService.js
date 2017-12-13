var Mailgun = require('machinepack-mailgun');

module.exports = {

	sendEmail: function(options, done){
		//Mailgun.sendHtmlEmail
		Mailgun.sendPlaintextEmail({
			apiKey: 'key-9ad692305d7a8539ac799b7ee0557bb8',
			domain: 'sandbox272e74ab8597489ab107c6db2b0a9243.mailgun.org',
			//domain: 'paulbadalian.com',
			toEmail: 'bad.alien7@gmail.com',
			subject: options.subject,
      		message: options.body,
            fromEmail: options.email,
		}).exec(function(err){
			if(err) return done(err);
			return done();
		});

	},

	validateInternalEmailAddress: function (options){
	    var potentiallyFixedEmailAddress = options.email;
	    if (options.emailAddress.match(/@(greezeworthy|greeseworthy|greasworthy)\.enterprise$/i)) {
	      potentiallyFixedEmailAddress = options.email.replace(/@(.+)\.enterprise$/, '@greaseworthy.enterprise');
	    }
	    if (potentiallyFixedEmailAddress.match(/@greaseworthy\.enterprise$/i)) {
	      var err = new Error('The specified email (`'+options.email+'`) is not a valid internal email address here at Greaseworthy enterprises.  You probably misspelled Harold\'s last name.  It is spelled "Greaseworthy".');
	      err.code = 'notInternal'
	      throw err;
	    }
	    return potentiallyFixedEmailAddress;
	}

};