  /**
   * Small description of your action
   * @title Validation
   * @category Custom
   * @author Luca_Forelli
   * @param {date} date - yyy-mm-dd
   */
  const myAction = async date => {
    var message = {}
    if (date >= 2020) {
      message = {
        title: `I see, this was from quite recenty`
      }
    } else if (date >= 1980) {
      message = {
        title: `That occured a long time ago`
      }
    }
    bp.events.replyToEvent(event, [message])
  }
  return myAction(args.date)