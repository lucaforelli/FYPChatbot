  /**
   * Small description of your action
   * @title Conversation Summary
   * @category Custom
   * @author Luca Forelli
   * @param
   */
  const myAction = async wholeSummary => {
    var message = {}
    message = {
      type: 'card',
      title: `Entire Conversation Summary`,
      subtitle: `****Place conversation:*****
      \nimage date: ${session.imageDate}
      \nlocation of place: ${session.placeLocation}
      \nplace description: ${session.placeInfo}
      \naudio description: ${session.busAudio}
      \nwhat you were doing: ${session.doingTime}
      \nweather: ${session.placeWeatherOther}
      \n${session.coldWeather}
      \n${session.warmWeather}
      \nweather audio: ${session.weatherAudio}
      \n
      \n*****Relatives conversation:*****
      \nfamily information: ${session.familyInfo}
      \nfamily story: ${session.familyStory}
      \nimage taker: ${session.familyImageTaker}
      \nkeep in touch: ${session.familyKeepInTouch}
      \ngood relationship: ${session.goodRelationship}
      \nbad relationship: ${session.badRelationship}
      \neutral relationship: ${session.neutralRelationship}
      \nfamily dinner video: ${session.familyDinnerVideo}`
    }
    bp.events.replyToEvent(event, [message])
  }
  return myAction(args.wholeSummary)