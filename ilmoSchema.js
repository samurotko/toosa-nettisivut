const mongoose = require('mongoose')

const sukkaSchema = mongoose.Schema({
  OttaakoSukat: {
    type: Boolean,
    required: true
  },
  Koko: {
    type: String,
    enum: ['36-39','40-43']
  }
})

const ilmoSchema = mongoose.Schema({
    Etunimi: {
      type: String,
      required: true
    },
    Sukunimi: {
      type: String,
      required: true
    },
    Sähköposti: {
      type: String,
      required: true
    },
    Kilta: String,
    Lahja: {
      type: Boolean,
      required: true
    },
    Allergiat: String,
    Pöytäseurue: String,
    Sillis: Boolean,
    Kiintiö: {
      type: String,
      enum: ['opiskelija','alumni','tukija'],
      required: true
    },
    Holi: {
      type: String,
      enum: ['holi','väh. holi','holiton'],
      required: true
    },
    Avec: {
      type: String,
      enum: ['jallu','punssi','holiton'],
      required: true
    },
    Sukat: sukkaSchema,
  })

  ilmoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


  module.exports = mongoose.model('Ilmo', ilmoSchema)