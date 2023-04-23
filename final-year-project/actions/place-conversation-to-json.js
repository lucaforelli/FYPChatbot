
  const fs = require('fs')

  const myAction = async placeSummaryToJson => {
    const PlaceUserResponses = {
      imageDate: session.imageDate,
      placeLocation: session.placeLocation,
      placeInfo: session.placeInfo,
      busAudio: session.busAudio,
      doingTime: session.doingTime,
      placeWeatherOther: session.placeWeatherOther,
      coldWeather: session.coldWeather,
      warmWeather: session.warmWeather,
      weatherAudio: session.weatherAudio
    }

    // Use the current timestamp to generate a unique filename
    const fileNamePlace = `C:/Users/Luca/Desktop/UserResponses/PlaceUserResponses_${Date.now()}.json`

    // Write user responses to the JSON file
    fs.writeFile(fileNamePlace, JSON.stringify(PlaceUserResponses, null, 2), err => {
      if (err) throw err
      console.log(`User responses saved in ${fileNamePlace}`)
    })
  }

  return myAction(args.placeSummaryToJson)