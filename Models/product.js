const { Schema } = require('mongoose')

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: {type: Boolean, required: true},
    description: {type: String, required: true},
    bestSeller: { type: Boolean, required: true },
    image: { type: String, required: true},
    shortDesc: { type: String, required: true},
    jewelryId: { type: Schema.Types.ObjectId, ref: `Jewel`}
  },
  { timestamps: true }
)

module.exports = ProductSchema;