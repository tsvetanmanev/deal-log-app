const mongoose = require('mongoose')
const ObjectId = mongoose.SchemaTypes.ObjectId

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let soarSchema = new mongoose.Schema({
  creator: { type: ObjectId, ref: 'User' },
  projectName: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  opportunityId: { type: String, required: REQUIRED_VALIDATION_MESSAGE, maxlength: 20 },
  approvalId: { type: String, required: REQUIRED_VALIDATION_MESSAGE, maxlength: 20 },
  country: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  soarType: { type: String, required: REQUIRED_VALIDATION_MESSAGE },
  totalValue: { type: Number, required: REQUIRED_VALIDATION_MESSAGE },
  margin: { type: Number }
})

let Soar = mongoose.model('Soar', soarSchema)

module.exports = Soar
