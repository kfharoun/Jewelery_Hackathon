const { Schema } = require('mongoose')

const JewelSchema = new Schema(
  {
    JewelType: { type: String, required: true },
    metalType: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = JewelSchema