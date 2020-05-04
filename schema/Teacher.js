module.exports = `

    type Teacher {
        id: ID!
        name: String!
        country: String!
        gender: Gender
        courses: [Course]
    }

    enum Gender {
        MALE
        FEMALE
    }
    
    input newTeacher {
        name: String!,
        gender: Gender!,
        country: String!
    }

    input teacherUpdate {
        name: String
        gender: Gender
        country: String

    }
`