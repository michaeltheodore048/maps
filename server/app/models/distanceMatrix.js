module.exports = function (orm, db) {
  var distanceMatrix = db.define('distanceMatrix', {
    OriginLat: { type: 'text', required: true },
    OriginLong: { type: 'text', required: true },
    DestinationLat: { type: 'text', required: true },
    DestinationLong: { type: 'text', required: true },
    Distance: { type: 'text', required: true },
    Time: { type: 'text', required: true },
  },
  {
    methods: {
      serialize: function () {
        return {
          Origin: {
            Lat: this.OriginLat,
            Long: this.OriginLong
          },
          Destination: {
            Lat: this.DestinationLat,
            Long: this.DestinationLong
          },
          Distance: this.Distance,
          Time: this.Time
        }
      }
    }
  })
}
