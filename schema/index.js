const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Teacher = require('./Teacher')
const Course = require('./Course')

const rootQuery = `
     
    type Query {
        courses: [Course]
        teachers: [Teacher]
        course(id:Int): Course
        teacher(id: Int): Teacher
    }

    type Mutation {
        teacherAdd(teacher: newTeacher): Teacher,
        teacherUpdate(id: Int, teacher: teacherUpdate): Teacher,
        teacherDelete(id: Int): Teacher,

        courseAdd(course: newCourse): Course,
        courseUpdate(id: Int, course: courseUpdate): Course,
        courseDelete(id: Int): Course
    }
`


const schema = makeExecutableSchema({
    typeDefs: [rootQuery, Teacher, Course],
    resolvers
})



module.exports = schema