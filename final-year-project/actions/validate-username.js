  /**
   * Small description of your action
   * @title Validation
   * @category Custom
   * @author Your_Name
   * @param {number} id - 4-digit number
   */
  const myAction = async username => {
    var message = {}
    if (username == 'ben2019') {
      message = {
        type: 'card',
        title: `Nice to have you back, ${username}!`,
        subtitle: `Let's continue where we left off last time, ${username}, `,
        image: `https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`
      }
    } else if (username == 'maria2020') {
      message = {
        type: 'card',
        title: `Happy to see you again, ${username}!`,
        subtitle: `Shall we continue our conversation, ${username}?`,
        image: `https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60`
      }
    } else {
      message = {
        type: 'card',
        title: `Hmm, you seem to be a new user. Nice to meet you, ${username}!`,
        subtitle: `Can't wait to learn more about you ${username}!`,
        image: `https://images.unsplash.com/photo-1580034283351-073a1906f7ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80`
      }
    }
    bp.events.replyToEvent(event, [message])
  }
  return myAction(args.username)