const { Model } = require('objection')
const path = require('path')

class Teacher extends Model {
  static get tableName() {
    return 'teachers'
  }

  static get relationMappings() {
    return {
      cursos: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '/Course'),
        join: {
          from: 'teachers.id',
          to: 'courses.teacher_id'
        }
      }
    }
  }
}

module.exports = Teacher
