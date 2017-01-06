const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
    name:"ContestType",
    fields:()=>{
        return {
            id:{type:GraphQLID},
            name:{type:GraphQLString},
            description:{type:GraphQLString}
        }
    }
});