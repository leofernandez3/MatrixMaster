// controllers/controller.js

const data = [
  { name: "Michael Choi", createdAt: "23-01-2013", message: "This is my message This is my message This is my message" },
  { name: "Sarah Lee", createdAt: "15-03-2014", message: "Another post from Sarah!" },
  { name: "John Doe", createdAt: "01-07-2015", message: "Hello world!" }
];

exports.getTimeline = (req, res) => {
  res.render('timeline', { posts: data });
};