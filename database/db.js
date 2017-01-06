const log = require('adv-logger');
module.exports = User=>{
    return {
        getUser(names){
            return User.find({name:{$in:names}}).then(res=>[res[0]])
        }
    }
}