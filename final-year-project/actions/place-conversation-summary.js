  /**
   * Summary card of place conversation
   * @title Conversation Summary
   * @category Custom
   * @author Luca Forelli
   * @param
   */
  const myAction = async placeSummary => {
    var message = {}
    message = {
      type: 'card',
      title: `Place Conversation Summary`,
      subtitle: `nimage date: ${session.imageDate}
      \nlocation of place: ${session.placeLocation}
      \nplace description: ${session.placeInfo}
      \naudio description: ${session.busAudio}
      \nwhat you were doing: ${session.doingTime}
      \nweather: ${session.placeWeatherOther} 
      \n${session.coldWeather}
      \n${session.warmWeather}
      \nweather audio: ${session.weatherAudio}`
    }
    bp.events.replyToEvent(event, [message])
  }
  return myAction(args.placeSummary)