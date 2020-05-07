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
                return Teacher.query().deleteById(args.id).then((deletedRows) => {
                    if (deletedRows > 0) {
                        return teacher
                    }
                    throw new Error(`Teacher with id ${args.id} could not delete`)
                })
            })
        },
        courseAdd: (_, args) => {
            return Course.query().insert(args.course)
        },
        courseUpdate: (_, args) => {
            return Course.query().patchAndFetchById(args.id, args.course)
        },
        courseDelete: (_, args) => {
            return Course.query().findById(args.id).then((course) => {
                return Course.query().deleteById(args.id).then((deletedRows) => {
                    if (deletedRows > 0) {
                        return course
                    }
                    throw new Error(`Course with id ${args.id} could not delete`)
                })
            })
        },
    }
}

module.exports = resolvers