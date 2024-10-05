var BD = require('../models/user')

class validations {

    validateString(name){
          if(name != undefined && name != '' && name != ' '){
            return true
          } 
          else{
            return false
          } 
    }

    async validateEmail(email){
        try{
            var user = await BD.find({'email': email})
            return true
        }
        catch(err){
            return false
        }
    }
};


module.exports = new validations();