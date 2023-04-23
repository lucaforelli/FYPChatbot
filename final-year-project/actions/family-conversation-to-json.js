  const fs = require('fs')

  const myAction = async familySummaryToJson => {
    const FamilyUserResponses = {
      imageDate: session.imageDate,
      familyInfo: session.familyInfo,
      familyStory: session.familyStory,
      familyImageTaker: session.familyImageTaker,
      familyKeepInTouch: session.familyKeepInTouch,
      goodRelationship: session.goodRelationship,
      badRelationship: session.badRelationship,
      neutralRelationship: session.neutralRelationship,
      familyDinnerVideo: session.familyDinnerVideo
    }

    // Use the current timestamp to generate a unique filename
    const fileNameFamily = `C:/Users/Luca/Desktop/UserResponses/FamilyUserResponses_${Date.now()}.json`

    // Write user responses to the JSON file
    fs.writeFile(fileNameFamily, JSON.stringify(FamilyUserResponses, null, 2), err => {
      if (err) throw err
      console.log(`User responses saved in ${fileNameFamily}`)
    })
  }

  return myAction(args.familySummaryToJson)