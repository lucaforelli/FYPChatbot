  /**
   * Small description of your action
   * @title Random_Places_Images
   * @category Custom
   * @author Luca_Forelli
   */

  const placeUrls = [
    'https://images.unsplash.com/photo-1483972117325-ce4920ff780b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1532117472055-4d0734b51f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1611055712328-e17bf52ebe12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.pexels.com/photos/16216982/pexels-photo-16216982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1494922275507-58dc039ed337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.pexels.com/photos/6140967/pexels-photo-6140967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5638602/pexels-photo-5638602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5122960/pexels-photo-5122960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1502700559166-5792585222ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1509095660908-d9b1e7ffec62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1514065549995-7706f6017a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
  ]

  // Select a random URL from the array
  //const randomPlaceUrl = placeUrls[Math.floor(Math.random() * placeUrls.length)]

  // Select a random URL from the array
  const randomIndex = Math.floor(Math.random() * placeUrls.length)
  const randomPlaceUrl = placeUrls[randomIndex]

  // Remove the selected URL from the array
  placeUrls.splice(randomIndex, 1)

  const myAction = async placeImage => {
    var message = {}
    message = {
      type: 'card',
      image: randomPlaceUrl
    }
    bp.events.replyToEvent(event, [message])
  }
  return myAction(args.placeImage)

  /** 
   * Selected image moved to another list
async function getAndRemoveRandomPlaceUrl(bp, event) {
  // Retrieve the place URLs from the key-value store
  const placeUrls = await bp.kvs.forBot(event.botId).get('placeUrls') || [
    'https://images.pexels.com/photos/16216982/pexels-photo-16216982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1494922275507-58dc039ed337?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1502700559166-5792585222ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1509095660908-d9b1e7ffec62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1514065549995-7706f6017a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
  ];

  // Select a random URL from the array
  const randomIndex = Math.floor(Math.random() * placeUrls.length);
  const randomPlaceUrl = placeUrls[randomIndex];

  // Remove the selected URL from the array
  placeUrls.splice(randomIndex, 1);

  // Update the place URLs in the key-value store
  await bp.kvs.forBot(event.botId).set('placeUrls', placeUrls);

  // Return the selected URL
  return randomPlaceUrl;
}

const myAction = async (bp, event) => {
  const randomPlaceUrl = await getAndRemoveRandomPlaceUrl(bp, event);
  const message = {
    type: 'card',
    image: randomPlaceUrl
  };
  bp.events.replyToEvent(event, [message]);
};

return myAction(bp, event);
*/