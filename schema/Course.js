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
    }

    input newCourse {
        title: String!
        description: String!
    }

    input courseUpdate {
        title: String
        description: String
    }
    `