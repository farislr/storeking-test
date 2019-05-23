var mongoose = require('mongoose')
var Schema = mongoose.Schema
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'))
}

var newSchema = new Schema({
  dishesName: { type: String },
  isActive: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

newSchema.pre('save', function(next) {
  this.updatedAt = Date.now()
  next()
})

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } })
})

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } })
})

module.exports = mongoose.model('Dish', newSchema)
