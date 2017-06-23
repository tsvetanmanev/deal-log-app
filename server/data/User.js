const mongoose = require('mongoose')
const ObjectId = mongoose.SchemaTypes.ObjectId

const encryption = require('../utilities/encryption')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let userSchema = new mongoose.Schema({
  username: { type: String, required: REQUIRED_VALIDATION_MESSAGE, unique: true },
  firstName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  lastName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  salt: String,
  hashedPass: String,
  roles: [String],
  createdSoars: [{ type: ObjectId, ref: 'Soar' }]
})

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User
module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length > 0) return

    let salt = encryption.generateSalt()
    let hashedPass = encryption.generateHashedPassword(salt, 'r3shk0#88')

    User.create({
      username: 'Admin',
      firstName: 'Admin',
      lastName: 'Admin',
      salt: salt,
      hashedPass: hashedPass,
      roles: ['Admin']
    })
  })
}
