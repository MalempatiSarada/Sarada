// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})
//Dynamic Data
router.get('/query',(req,res,next) => {
  const name = req.query.name
  const age = req.query.age
  const data ={
    name : name,
    age : age
  }
  res.render('datas',data)
})



//post methods
router.post("/addprofile",(req,res) => {
    const body = req.body
    body['skills'] = req.body.skills.split(',')
    profiles[body.username] = body
    res.json ({
      confirmation : "success",
      data : body
    })
})
/*    router.get("/:username",(req,res)=>{
  const username = req.params.username
  const given = profiles[username]  //This is for getting certain one
  res.render('profile',given)
}) */
router.get("/profiles",(req,res) => {
  
  const keys = Object.keys(profiles)
  const list=[]
  keys.forEach(key => {
    list.push(profiles[key])
  })
  //const timestamp = new Date()
  const data ={
    profiles: list,
    timestamp: req.timestamp  //middleware usage
  }
  res.render('profiles',data)
})

router.get('/:profile/:username',(req,res) => {
  const profile  = req.params.profile
  const username = req.params.username
  const given = profiles[username]
  if (given==null){
    res.json({
      confirmation:'Fail',
      message :"Username Not Found"
    })
    return
  }
  const timestamp = new Date()
  given.timestamp = timestamp
  res.render('profile',given)
})
module.exports = router



//adding,getting data
const profiles = {
  sai123: {
    username:'sai123',
    name: 'Sai',
    age : 19,
    skills : ['C','Java']
  },
  las123: {
    username:'las123',
    name:'Laasya',
    age : 20,
    skills :['python','javascript','html']
  },
}
