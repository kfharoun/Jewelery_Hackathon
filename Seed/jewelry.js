const db = require('../DB')
const { Jewel } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jewels =
  [
    {
      jewelryType: "Necklace",
      metalType: ["18k Gold Vermeil", "14k Solid Gold", "Rose Gold"]
    },
    {
       jewelryType: "Ring",
        metalType: ["14k Yellow Gold", "14k White Gold", "18k Solid Yellow Gold"]
    }
  ]
  await Movie.insertMany(jewels)
  console.log(`created jewels!`)
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()