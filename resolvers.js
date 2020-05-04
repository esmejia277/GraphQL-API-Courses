const Course = require('./models/Course')
const Teacher = require('./models/Teacher')

const resolvers = {
    Query: {
        courses: () => Course.query().withGraphFetched('[teacher, comments]'),
        teachers: () => Teacher.query().withGraphFetched('courses'),
        course: (rootValue, args) => Course.query().withGraphFetched('[teacher, comments]').findById(args.id),
        teacher: (rootValue, args) => Teacher.query().withGraphFetched('courses').findById(args.id),
        courses: () => Course.query()
    },
    Mutation: {
        teacherAdd: (_, args) => {
            return Teacher.query().insert(args.teacher)

        },
        teacherUpdate: (_, args) => {
            return Teacher.query().patchAndFetchById(args.id, args.teacher)

        },
        teacherDelete: (_, args) => {
            return Teacher.query().findById(args.id).then((teacher) => {
                return Teacher.query().deleteById(args.id).then(() => Teacher)

            })

        }
    }
}

module.exports = resolvers