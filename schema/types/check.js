const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require('graphql');

module.exports = new GraphQLObjectType({
    name:'CheckType',
    fields:()=>{
        const ContestType = require('./contest.js');
        return {
            last_name:{
                type:GraphQLString,
                resolve(obj){return obj.last_name}
            },
            location:{
                type:GraphQLString,
                resolve(obj){return obj.location}
            },
            contests:{
                type:new GraphQLList(ContestType),
                resolve(obj, args, { loaders },{fieldName}){
                    return loaders.getContests.load([1,2,3]);
                }
            }
        }

    }
})