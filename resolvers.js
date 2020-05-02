const Course = require('./models/Course')
const Teacher = require('./models/Teacher')

const resolvers = {
    Query: {
        courses: () => Course.query().withGraphFetched('[teacher, comments]'),
        teachers: () => Teacher.query().withGraphFetched('courses'),
        course: (rootValue, args) => Course.query().withGraphFetched('[teacher, comments]').findById(args.id),
        teacher: (rootValue, args) => Teacher.query().withGraphFetched('courses').findById(args.id),
        courses: () => Course.query()
    }
}

module.exports = resolvers