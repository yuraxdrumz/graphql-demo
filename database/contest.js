const log = require('adv-logger');
module.exports = Contest=>{
    return {
        getContests(ids){
            return Contest.find({id:{$in:ids}})
        }
    }
}