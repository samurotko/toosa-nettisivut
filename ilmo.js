const ilmoRouter = require('express').Router()
const Ilmo = require('./ilmoSchema')




ilmoRouter.get('/', async (request, response) => { 
  const ilmos = await Ilmo.find({}).populate('user', {username: 1, name: 1})
  response.json(ilmos.map(b => b.toJSON()))
})



  
ilmoRouter.post('/', async (request, response) => {
  
    const body = request.body
    console.log("body",body)

    const ilmo = new Ilmo({
      title: body.title,
      author: body.author,
      url: body.url,

      Etunimi: body.Etunimi,
      Sukunimi: body.Sukunimi,
      Sähköposti: body.Sähköposti,
      Kilta: body.Kilta,
      Lahja: body.Lahja,
      Allergiat: body.Allergiat,
      Pöytäseurue: body.Pöytäseurue,
      Sillis: body.Sillis,
      Kiintiö: body.Kiintiö,
      Holi: body.Holi,
      Avec: body.Avec,
      Sukat: {
        OttaakoSukat: body.Sukat.OttaakoSukat, 
        Koko: body.Sukat.Koko
      },

    })
    console.log("posting ilmo",ilmo)
    

  
    const savedIlmo = await ilmo.save()
    console.log("savedIlmo",savedIlmo)
  
    response.json(savedIlmo.toJSON())
  })


  module.exports = ilmoRouter