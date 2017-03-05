
module.exports = {
  homePage: (req, res, next) => {
    res.render("index.pug");
  },
  errorPage: (req, res, next) => {
    res.render("notFound.pug");
  },
  getAllResult: (req, res, next) => {
    req.models.distancematrix.find().all(function (err, val) {
      if (err) return next(err);

      let temp = val.map(function(value, key){
        return value.serialize()
      })
      res.send(temp)
    })
  },
  postDistanceMatrix: (req, res, next) => {
    let origin = req.body.origin.split(',')
    let destination = req.body.destination.split(',')
    let distance = req.body.distance
    let time = req.body.time

    req.models.distancematrix.create([
      {
        OriginLat: origin[0],
        OriginLong: origin[1],
        DestinationLat: destination[0],
        DestinationLong: destination[1],
        Distance: distance,
        Time: time
      }
    ], function(err, items){
      if(err) {
        console.log(err)
        res.status('ERROR')
        res.send(err)
      }
      res.send(items)
    })
  }
};
