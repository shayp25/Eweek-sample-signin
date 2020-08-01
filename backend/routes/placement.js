const router = require('express').Router();
let Placement = require('../models/placement.models');

//.find is a mongose method that will return a promise in json format
router.route('/').get((req, res) => {
    Placement.find()
    .then(placement => res.json(placement))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post request to add new sign in
router.route('/add').post((req, res) => {
  const judgeName = req.body.judgeName;
  const hostingOrg = req.body.hostingOrg;
  const event = req.body.event;

  const large1 = req.body.large1;
  const large2 = req.body.large2;
  const large3 = req.body.large3;
  const large4 = req.body.large4;
  const large5 = req.body.large5;
  const largeParticipated = req.body.largeParticipated;

  const small1 = req.body.small1;
  const small2 = req.body.small2;
  const small3 = req.body.small3;
  const small4 = req.body.small4;
  const small5 = req.body.small5;
  const smallParticipated = req.body.smallParticipated;

  const newPlacementRecord = new Placement({
    judgeName,
    hostingOrg,
    event,
    large1,
    large2,
    large3,
    large4,
    large5,
    largeParticipated,
    small1,
    small2,
    small3,
    small4,
    small5,
    smallParticipated
  });

  var query = {
    'judgeName': judgeName,
    'event': event
};

  console.log(newPlacementRecord);
  
  //it wont duplicate a sign in but it will add a new one
  Placement.findOneAndUpdate(query, newPlacementRecord,{upsert: true})
    .then(() => res.json('placement logged!'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});

router.route('/:id').get((req, res) => {
  Placement.findById(req.params.id)
    .then(placement => res.json(placement))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Placement.findByIdAndDelete(req.params.id)
    .then(() => res.json('placement In deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {//!find out what we need to update
  Placement.findById(req.params.id)
    .then(signIn => {
      signIn.eventCode = req.body.eventCode;
      signIn.eid = req.body.eid;

      Placement.save()
        .then(() => res.json('SignIn updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;