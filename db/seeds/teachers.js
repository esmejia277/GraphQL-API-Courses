const casual = require('casual')

exports.seed = (knex) => {
  return knex('teachers').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('teachers').insert([{
        id: i + 1,
        name: casual.name,
        country: casual.country,
        gender: casual.random_element(['MALE', 'FEMALE'])
      }])
    })

    return Promise.all(promises)
  })
}
