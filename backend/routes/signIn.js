const router = require('express').Router();
let SignIn = require('../models/signIn.models');

//.find is a mongose method that will return a promise in json format
router.route('/').get((req, res) => {
  SignIn.find()
    .then(signIn => res.json(signIn))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post request to add new sign in
router.route('/add').post((req, res) => {
  const eventCode = req.body.eventCode;
  const eid = req.body.eid;
  const year = req.body.year;
  const org = req.body.org;
  const event = req.body.event;
  const major = req.body.major;
  const signingInOut = req.body.signingInOut;

  const newSignIn = new SignIn({
    eventCode,
    eid,
    org,
    event,
    year,
    major,
    signingInOut
  });

  var query = {
    'eventCode': eventCode,
    'eid': eid,
    'signingInOut': signingInOut
};


  console.log(newSignIn);
  
  //it wont duplicate a sign in but it will add a new one
  SignIn.findOneAndUpdate(query, newSignIn,{upsert: true})
    .then(() => res.json('Signed In!'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});

router.route('/:id').get((req, res) => {
  SignIn.findById(req.params.id)
    .then(signin => res.json(signin))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  SignIn.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sign In deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  SignIn.findById(req.params.id)
    .then(signIn => {
      signIn.eventCode = req.body.eventCode;
      signIn.description = req.body.description;

      signIn.save()
        .then(() => res.json('SignIn updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;