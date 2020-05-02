const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const casual = require('casual');

// models
const Course = require('./models/Course')
const Teacher = require('./models/Teacher')

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
        courses: [Course]
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
        courses: () => Course.query().eager('[teacher, comments]'),
        teachers: () => Teacher.query().eager('courses'),
        course: (rootValue, args) => Course.query().eager('[teacher, comments]').findById(args.id),
        teacher: (rootValue, args) => Teacher.query().eager('courses').findById(args.id)
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
    preserveResolvers: true
})

module.exports = schema