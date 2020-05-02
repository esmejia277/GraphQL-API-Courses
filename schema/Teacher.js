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

`