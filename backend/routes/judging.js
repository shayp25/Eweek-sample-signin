const router = require('express').Router();
let Judging = require('../models/judging.models');

//.find is a mongose method that will return a promise in json format
router.route('/').get((req, res) => {
    Judging.find()
    .then(judging => res.json(judging))
    .catch(err => res.status(400).json('Error: ' + err));
});

//post request to add new sign in
router.route('/add').post((req, res) => {
    const judgeName = req.body.judgeName;
    const hostingOrg = req.body.hostingOrg;
    const event = req.body.event;
    const headcount = req.body.headcount;

    const  eventLogistics = req.body.eventLogistics;
    const  questionsAddressed = req.body.questionsAddressed;
    const  judgingIssues = req.body.judgingIssues;
    const  eventGraphic  = req.body.eventGraphic;
    const  hostControl = req.body.hostControl;
    const  creativity = req.body.creativity;
    const  participantEngagement = req.body.participantEngagement;
    const  promptness = req.body.promptness;
    const  audienceEngagement = req.body.audienceEngagement;
    const finalThoughts = req.body.finalThoughts;

  const newJudgingRecord = new Judging({
    judgeName,
    hostingOrg,
    event,
    headcount,
    eventLogistics,
    questionsAddressed,
    judgingIssues,
    eventGraphic,
    hostControl,
    creativity,
    participantEngagement,
    promptness,
    audienceEngagement,
    finalThoughts,
 
  });

  var query = {
    'judgeName': judgeName,
    'event': event
};

  console.log(newJudgingRecord);
  
  //it wont duplicate a sign in but it will add a new one
  Judging.findOneAndUpdate(query, newJudgingRecord,{upsert: true})
    .then(() => res.json('judging scores logged!'))
    .catch(err => res.status(400).json('Error: ' + err));
  
});

router.route('/:id').get((req, res) => {
    Judging.findById(req.params.id)
    .then(judge => res.json(judge))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Judging.findByIdAndDelete(req.params.id)
    .then(() => res.json('judging form deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {//!find out what we need to update
    Judging.findById(req.params.id)
    .then(signIn => {
      signIn.eventCode = req.body.eventCode;
      signIn.eid = req.body.eid;

      Judging.save()
        .then(() => res.json('SignIn updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;