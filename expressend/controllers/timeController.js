module.exports.Time = (req, res) => {
  const date = new Date().toLocaleString();
  res.send(date);
};
