const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const CheckType = require('./types/check');
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields :()=>{
        return {
            check:{
                type:CheckType,
                description:"The current user identified by name",
                args:{
                    name:{type:new GraphQLNonNull(GraphQLString)}
                },
                resolve:(obj, args, {loaders},{fieldName})=>{
                    return loaders.getUser.load([args.name]);
                }
            }
        }

    }
})

const mySchema =  new GraphQLSchema({
    query: RootQueryType
})

module.exports = mySchema