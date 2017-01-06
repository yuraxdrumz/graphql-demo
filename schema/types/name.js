const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = require('graphql');


module.exports = new GraphQLObjectType({
    name:"Name",
    fields:{
        id:{type:GraphQLID},
        label:{type: new GraphQLNonNull(GraphQLString)},
        createdAt:{type: new GraphQLNonNull(GraphQLString)}

    }
});