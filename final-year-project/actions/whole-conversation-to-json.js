  const fs = require('fs')

  const myAction = async wholeSummaryToJson => {
    const EntireUserResponses = {
      imageDate: session.imageDate,
      familyInfo: session.familyInfo,
      familyStory: session.familyStory,
      familyImageTaker: session.familyImageTaker,
      familyKeepInTouch: session.familyKeepInTouch,
      goodRelationship: session.goodRelationship,
      badRelationship: session.badRelationship,
      neutralRelationship: session.neutralRelationship,
      familyDinnerVideo: session.familyDinnerVideo,
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
    const fileNameEntire = `C:/Users/Luca/Desktop/UserResponses/EntireUserResponses_${Date.now()}.json`

    // Write user responses to the JSON file
    fs.writeFile(fileNameEntire, JSON.stringify(EntireUserResponses, null, 2), err => {
      if (err) throw err
      console.log(`User responses saved in ${fileNameEntire}`)
    })
  }

  return myAction(args.wholeSummaryToJson)