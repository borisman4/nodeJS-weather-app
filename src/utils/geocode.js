const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +
     '.json?access_token=pk.eyJ1IjoiYm9yaXNtYW41NCIsImEiOiJjazI5N3ZoMHgzZTQxM25tdjZmZjA0cmVvIn0.ew7rC29IPQgZPhh3D0EsTQ&limit=1'

    request({ url, json: true }, (err, { body }) => {
        if(err) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try again', undefined)
        } else {
            callback(undefined, {
                longtitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location:  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode