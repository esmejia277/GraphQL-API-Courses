const { addMockFunctionsToSchema } = require('graphql-tools')

const mocks = addMockFunctionsToSchema({
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

module.exports = mocks