const db = require('../DB')
const { Jewel, Product } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const necklace = await Jewel.find({ jewelryType: "Necklace" })
  const ring = await Jewel.find({ jewelryType: "Ring" })

  const products = [
    {
        // Necklaces
      name: "Cleopatra Molten Gold Pendant",
      price: 240,
      inStock: true, 
      description: "Cleopatra, the last queen of Ancient Egypt, remains an enigma, a blend of allure, intelligence, and political acumen. Born into the Ptolemaic dynasty, she was not merely a ruler but a force of nature who shaped the course of history.",
      bestSeller: false, 
      image: "https://commonera.com/cdn/shop/files/cleolifestyle4.jpg?crop=center&height=1500&v=1696512931&width=1500",
      shortDesc: "The Queen",
      jewelryId: necklace._id
    }, 
    {
        name: "Circe Demi-Goddess of Witchcraft Necklace with Diamond",
        price: 320,
        inStock: true, 
        description: "This medallion is etched with a line drawing of Circe, with a 1.3mm diamond sun shining down upon her, just like on her island, Aeaea. Wear this piece when you're feeling the need to turn some boys into boars.",
        bestSeller: true, 
        image: "https://commonera.com/cdn/shop/products/Circe.jpg?crop=center&height=1500&v=1696512895&width=1500",
        shortDesc: "Demi-Goddess of Witchcraft and Magic",
        jewelryId: necklace._id
      }, 
      {
        name: "Medusa Molten Mini Medallion",
        price: 995,
        inStock: true, 
        description: "This molten gold medallion brings Medusa to life in three dimensions, golden snakes seem to almost move as the light hits the syrupy metal. Around half the size of the original Medusa 7 Emerald Medallion, she is cast in 100% solid gold or 18k gold vermeil, and can be purchased with or without a chain.",
        bestSeller: true, 
        image: "https://commonera.com/cdn/shop/products/Medusa8.jpg?crop=center&height=1500&v=1680293699&width=1500",
        shortDesc: "The Avenger",
        jewelryId: necklace._id
      }, 
        // Rings
        {
            name: "Hecate Molten Ring",
            price: 795,
            inStock: false, 
            description: "The darkest of magics belongs only to Hecate, who dabbles in sorcery that no other god or goddess dares attempt: it is too old, too sacred, too volatile. This molten gold ring is inspired by the ancient Roman sculpture know as the Hecate Chiaramonti, which lives in the Vatican Museums. Cast using the ancient lost wax method from in 100% recycled 14k gold, each ring is handcrafted to order in our NYC studio - please allow 2 weeks for your ring to ship.",
            bestSeller: true, 
            image: "https://commonera.com/cdn/shop/products/Hecate6.jpg?crop=center&height=1500&v=1680293592&width=1500",
            shortDesc: "The Witch",
            jewelryId: ring._id
          }, 
          {
            name: "Magic Sator Square Gold Signet Ring",
            price: 990,
            inStock: true, 
            description: "Adorn your fingers with a symbol of protection and a piece of ancient mysticism. This is more than just a ring—it's a conversation starter, a statement piece, and a link to a bygone era of ancient intrigue and wonder.",
            bestSeller: true, 
            image: "https://commonera.com/cdn/shop/files/satorring1.jpg?crop=center&height=1500&v=1696513520&width=1500",
            shortDesc: "The Protector",
            jewelryId: ring._id
          },
          {
            name: "Gaia Molten Ring",
            price: 795,
            inStock: true, 
            description: "This molten gold ring is inspired by the depiction of Tellus, the roman equivalent of Gaia, on eastern frieze of the Ara Pacis. She is cast in 100% solid gold and is made to order in 2 weeks in our NYC studio.",
            bestSeller: true, 
            image: "https://commonera.com/cdn/shop/products/gaia5.jpg?crop=center&height=1500&v=1680293531&width=1500",
            shortDesc: "The Catalyst",
            jewelryId: ring._id
          }
  ]

  await Product.insertMany(products)
  console.log(`created products with jewels!`)
}
const run = async () => {
await main()
db.close()
}

run()