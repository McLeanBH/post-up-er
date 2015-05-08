
// Fixture data 
if (Posts.find().count() === 0) { 
  var now = new Date().getTime();
  
  // create two users
  var benId = Meteor.users.insert({
    profile: { name: 'Ben McLean' }
  });
  var ben = Meteor.users.findOne(benId);
  var bennettId = Meteor.users.insert({
    profile: { name: 'Bennett McLean' }
  });
  var bennett = Meteor.users.findOne(bennettId);
  
  var royalgreensId = Posts.insert({
    title: 'Introducing Royal Greens',
    userId: ben._id,
    author: ben.profile.name,
    url: 'http://royalgreens.biz',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: royalgreensId,
    userId: bennett._id,
    author: bennett.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Brn, can I get involved?'
  });
  
  Comments.insert({
    postId: royalgreensId,
    userId: ben._id,
    author: ben.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Bennett!'
  });
  
  Posts.insert({
    title: 'RG',
    userId: bennett._id,
    author: bennett.profile.name,
    url: 'http://royalgreens.biz',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  Posts.insert({
    title: 'Royal Greens',
    userId: ben._id,
    author: ben.profile.name,
    url: 'http://royalgreens.biz',
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0
  });

  for (var i = 0; i < 15; i++) {
    Posts.insert({
      title: 'Royal Greens Order #' + i,
      author: ben.profile.name,
      userId: ben._id,
      url: 'http://royalgreens.biz/?q=test-' + i,
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0
  });
  }
}