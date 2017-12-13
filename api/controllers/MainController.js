/**
 * MainControllerController
 *
 * @description :: Server-side logic for managing Maincontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res){

		return res.view('index')

	},

	about: function(req, res){

		return res.view('about')

	},

	email: function(req, res){

		req.validate({
			email: 'string',
			subject: 'string',
			body: 'string'
		});
		
		/*
		var potentialEmailAddress;
		try{
			potentialEmailAddress = MailService.validateInternalEmailAddress({
				emailAddress: req.param('email')
			});
		}catch(err){
			if(err.code === 'notInternal'){
				return res.badRequest("Not a valid email");
			}
			else{
				return res.serverError(err);
			}
		}
		*/
		MailService.sendEmail({
			email: req.param('email'),
			subject: req.param('subject'),
			body: req.param('body')
		}, function(err){
			if(err) return res.serverError(err)
			return res.ok()
		});
		
		return res.ok();
	}
		
};

