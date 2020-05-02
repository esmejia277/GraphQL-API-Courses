const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
var casual = require('casual');

const typeDefs = `
     
    type Course {
        id: ID!
        title: String!
        description: String!
        teacher: Teacher
        rating: Float
        comments: [Comment]
    }

    type Teacher {
        id: ID!
        name: String!
        country: String!
        gender: Gender
        course: [Course]
    }

    type Comment {
        id: ID!,
        name: String!
        body: String!
    }

    enum Gender {
        MALE
        FEMALE
    }

    type Query {
        courses: [Course]
        teachers: [Teacher]
        course(id:Int): Course
        teacher(id: Int): Teacher
    }
`

const resolvers = {
    Query: {
        courses: () => {
            return [{
                id: 1,
                title: 'Curso graphql',
                description: 'Learning graphql'

            }, {
                id: 2,
                title: 'Python Course',
                description: 'Learning Python'
            }]

        },
    },
    Course: {
        comments: () => {
            return [{
                id: 1,
                name: "Esteban",
                body: "Excellent quality"
            }]
        },
        teacher: () => {
            return {
                id: 1,
                name: "Hector",
                country: "Colombia"
            }
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})


addMockFunctionsToSchema({
    schema,
    mocks: {
        Course: () => {
            return {
                id: casual.uuid,
                title: casual.sentence,
                description: casual.sentences(2)
            }
        },
        Teacher: () => {
            return {
                name: casual.name,
                country: casual.country

            }
        }
    },
})

module.exports = schema