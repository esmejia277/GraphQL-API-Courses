module.exports = `

    type Course {
        id: ID!
        title: String!
        description: String!
        teacher: Teacher
        rating: Float
        comments: [Comment]
    }

    type Comment {
        id: ID!,
        name: String!
        body: String!
    }`