// noticed after doing this that i "cheated" by using a helper function. whoops.
function isSmallEnough(message) {
  return message.length < 50;
}

function getShortMessages(messages) {
  var justMessages = messages.map(function(mess) {
    return mess.message;
  });
  return justMessages.filter(isSmallEnough);
}

module.exports = getShortMessages;


// official answer:

/*
module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}
*/


