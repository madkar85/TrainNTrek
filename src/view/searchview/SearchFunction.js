// Function that handles the search algorithm to get the status of a user.
function search(user){
    let userInfo = (localStorage.getItem(user))
    if(userInfo == null)
    {
        userInfo = "User doesn't exist!"
    }
    return userInfo
  }

  module.exports = search;