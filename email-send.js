var NotifyClient = require('notifications-node-client').NotifyClient


var notifyClient = new NotifyClient('test3-7ca1089d-5825-4d74-a924-eb3559494c30-f3cf7f7b-b0ed-491b-805a-c994ae285bd5', 'api.notification.alpha.canada.ca')
 
const templateId =  "f33517ff-2a88-4f6e-b855-c550268ce08a"
const emailAddress = ""
const personalisation = {
  'first_name': 'Glenn',
  'application_number': '100200300'
}
const reference = ''

 notifyClient
 .sendEmail(templateId, emailAddress, {
   personalisation: personalisation,
   reference: reference,
 })
 .then(response => console.log(response))
 .catch(err => console.error(err))