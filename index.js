// code your solution here

function superbowlWin(win) {

    const result = win.find(obj => obj.result === "W")
    return result ? result.year:undefined 
  }
