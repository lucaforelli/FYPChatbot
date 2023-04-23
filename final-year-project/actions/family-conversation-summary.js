  /**
   * Summary relatives conversation card
   * @title Conversation Summary
   * @category Custom
   * @author Luca Forelli
   * @param
   */
  const myAction = async familySummary => {
    var message = {}
    message = {
      type: 'card',
      title: `Family Conversation Summary`,
      subtitle: `Here you go: 
      \nimage date: ${session.imageDate}
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
  return myAction(args.familySummary)