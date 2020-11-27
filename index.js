const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let arr = array.find( function(s) { return s.result === "W" })
    if(arr)
    return arr.year ;
}