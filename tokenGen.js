function makeToken() {

  var start = ""
  var mid = ""
  var end = ""
  function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 24; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  start = makeid()
  function makei() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  mid = makei()
  function maked() {
    var text = "";
    var possible = "_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 38; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  end = maked()
  var token = start + "." + mid + "." + end
  return token
}
const tokens = []
for (i = 0; i<50; i++) {
  tokens.push(makeToken())
}
console.log(tokens)
