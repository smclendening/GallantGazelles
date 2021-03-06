const router = require('express').Router();
const Users = require('./routes/Users');
const Followers = require('./routes/Followers');
const Pitches = require('./routes/Pitches');
const Categories = require('./routes/Categories');
const Comments = require('./routes/Comments');
const Votes = require('./routes/Votes');
const StreamComments = require('./routes/Stream-Comments');
const RecentComments = require('./routes/Recent-Comments');
const RecentPitches = require('./routes/Recent-Pitches');
const StreamPitches = require('./routes/Stream-Pitches');
// const Categories = require('./routes/Categories');

// Rest API to /api
router.get('/signin', (req, res) => {
	res.redirect('/');
});

router.get('/user', Users.getUserProfile)
// USERS
//Get all users
router.get('/users', Users.getUsers);

//Create new User
router.post('/users', Users.postUsers);

//Edit User information
router.put('/users', Users.putUsers);

//Remove User from DB
router.delete('/users', Users.deleteUserByName);

// COMMENTS
router.get('/comments', Comments.getComments);
router.post('/comments', Comments.postComment);
// router.put('/comments', comments.something.put);
// router.delete('/comments', comments.something.delete);

//Stream-Comments
router.get('/stream/comments', StreamComments.commentEnrichment);

//Stream-Pitches
router.get('/stream/pitches', StreamPitches.pitchEnrichment);

// Recent Comments
router.get('/comments/recent', RecentComments.getMostRecentComments);

// Recent Pitches
router.get('/pitches/recent', RecentPitches.getMostRecentPitches);

// PITCH PAGE
router.get('/pitch', Pitches.getOnePitch);

// PITCHES
router.get('/pitches', Pitches.getPitches);
router.post('/pitches', Pitches.postPitches);
router.put('/pitches', Pitches.putPitches);
router.delete('/pitches', Pitches.deletePitches);

// CATEGORIES
router.get('/categories', Categories.getCategories);

// FOLLOWERS
router.get('/followers', Followers.getFollowers);
router.put('/followers', Followers.postFollower);
router.post('/followers', Followers.postFollower);
router.delete('/followers', Followers.removeFollower);

//VOTES:
//query from db on whether this user voted for this specific pitch or not.
router.get('/votes', Votes.getVoteByUsername);
router.put('/votes', Votes.voteOnPitch);

module.exports = router;