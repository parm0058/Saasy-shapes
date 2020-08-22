const colors = ['red', 'blue', 'green', 'purple', 'orange']//[making an array of colors]
const shapes = ['square', 'circle', 'pentagon', 'hexagon', 'octagon']//[making an array of shapes]
const $main = document.getElementById("shapes")//[try to shapes by their id]
const mainArray = []
for (let shape of shapes) {//[declaring array]
  for (let color of colors) {
    mainArray.push(`<div class="${shape}-${color}"></div>`)
  }
}
$main.innerHTML += mainArray.join(' ')//[using the join method]
