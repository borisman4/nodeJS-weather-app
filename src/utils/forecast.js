const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/5e6e16b5ef0b1fbbf14ea75a02504bb4/' + lat + ',' + long +'?units=si'

    request({ url, json: true }, (err, { body }) => {
        if(err) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error) {
            callback('Unable to find location. PLease try again', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +
            body.currently.temperature + ' degrees out. There is a ' +
            body.currently.precipProbability * 100 + '% chance of rain')
        }
    })
}

module.exports = forecast