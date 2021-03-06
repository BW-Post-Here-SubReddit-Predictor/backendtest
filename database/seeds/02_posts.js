
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          user_id:1,
          title:'NA',
          subreddit:'NA',
          post: 'If You Had The World’s Attention For 30 Seconds, What Would You Say?',
        },
        {
          id: 2,
          user_id:1,
          title:'NA',
          subreddit:'NA',
          post: 'If You Had To Work But Didn’t Need The Money, What Would You Choose To Do?',
        },
        {
          id: 3,
          user_id:2,
          title:'NA',
          subreddit:'NA',
          post: 'What Is In Your Fridge Right Now?',
        },
        {
          id: 4,
          user_id:2,
          title:'NA',
          subreddit:'NA',
          post: 'If You Were Home On A Rainy Sunday Afternoon, What Movie Would You Most Want To See On Television?',
        },
        {
          id: 5,
          user_id:3,
          title:'NA',
          subreddit:'NA',
          post: 'Where Do You Not Mind Waiting?',
        },
        {
          id: 6,
          user_id:3,
          title:'NA',
          subreddit:'NA',
          post: 'If You Could Close One Fast Food Chain, Due To Disgusting Food, What Would You Pick?',
        },
        {
          id: 7,
          user_id:4,
          title:'NA',
          subreddit:'NA',
          post: 'If You Could Dis-Invent One Thing, What Would It Be?',
        },
        {
          id: 8,
          user_id:4,
          title:'NA',
          subreddit:'NA',
          post: 'If You Could Be A Member Of Any TV-Sitcom Family, Which Would It Be?',
        },
        {
          id: 9,
          user_id:5,
          title:'NA',
          subreddit:'NA',
          post: 'What Would Be The Best Thing About Not Having A Sense Of Smell?',
        },
        {
          id: 10,
          user_id:5,
          title:'NA',
          subreddit:'NA',
          post: 'Would You Leave Your Hometown Forever Or Stay In Your Hometown Forever?',
        },
        {
          id: 11,
          user_id:6,
          title:'NA',
          subreddit:'NA',
          post: 'When Scrolling Through Social Media, Do You Prefer Posts From Celebrities Or From Your Best Friends?',
        },
        {
          id: 12,
          user_id:6,
          title:'NA',
          subreddit:'NA',
          post: 'Is There An App That You Hate But Use Anyways?',
        },
        {
          id: 13,
          user_id:7,
          title:'NA',
          subreddit:'NA',
          post: 'If You Could Only Speak One Word Today, What Would You Say?',
        },
        {
          id: 14,
          user_id:7,
          title:'NA',
          subreddit:'NA',
          post: 'What Is The Stupidest Thing You’ve Done Because Someone Dared You To?',
        },
        {
          id: 15,
          user_id:8,
          title:'NA',
          subreddit:'NA',
          post: 'What Is The Stupidest Thing You’ve Done On Your Own Free Will?',
        },
        {
          id: 16,
          user_id:8,
          title:'NA',
          subreddit:'NA',
          post: 'Do You Do Dance Crazy When No One Is Looking?',
        },
        {
          id: 17,
          user_id:9,
          title:'NA',
          subreddit:'NA',
          post: 'What Was The Best Thing Before Sliced Bread?',
        },
        {
          id: 18,
          user_id:9,
          title:'NA',
          subreddit:'NA',
          post: 'If You Could Wedgie Any Historical Figure, Who Would You Pick?',
        },
        {
          id: 19,
          user_id:10,
          title:'NA',
          subreddit:'NA',
          post: 'How Come You Never Read About A Psychic Winning The Lottery?',
        },
        {
          id: 20,
          user_id:10,
          title:'NA',
          subreddit:'NA',
          post: 'How Many Pennies Would Fit Into This Room?',
        },
        {
          id: 21,
          user_id:11,
          title:'NA',
          subreddit:'NA',
          post: 'You’ve Been Given An Elephant. You Can’t Get Rid Of It. What Would You Do With It?',
        },
        {
          id: 22,
          user_id:11,
          title:'NA',
          subreddit:'NA',
          post: 'Would You Rather Live (Permanently) In A Roller Coaster Park Or In A Zoo?',
        },
        {
          id: 23,
          user_id:12,
          title:'NA',
          subreddit:'NA',
          post: 'You’re In The Circus, Would You Rather Be The Person With Their Head Inside The Lion’s Mouths Or Get Shot Out Of The Cannon?',
        },
        {
          id: 24,
          user_id:12,
          title:'NA',
          subreddit:'NA',
          post: 'Would You Rather Be Able To Copy And Paste In Real Life, Or Undo In Real Life?',
        },
        {
          id: 25,
          user_id:12,
          title:'NA',
          subreddit:'NA',
          post: 'Would You Rather Keep Your Current Sleep Schedule Or Hibernate For 3 Months And Have 9 Months Of 24/7 Alertness Without Being Tired?'
        }
      ]);
    });
};
