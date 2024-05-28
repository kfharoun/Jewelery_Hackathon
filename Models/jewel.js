const { Schema } = require('mongoose')

const JewelSchema = new Schema(
  {
    jewelType: { type: String, required: true },
    metalType: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = JewelSchema