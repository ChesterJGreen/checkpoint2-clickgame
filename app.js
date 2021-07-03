let power = 0
let totalPower = 0
let multiplier = 0
let aUpgrades = 0
let cUpgrades = 0
let click = 0
// // let allCModifiers = for (let modifiers in clickUpgrades) {
// //   clickUpgrades[modifiers].multiplier
// }
let clickUpgrades = {
  boyFists: {
    price: 10,
    quantity: 0,
    multiplier: 1
  }
};
let automaticUpgrades = {
  follower: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};


function powerOfThor() {
  // debugger
  totalPower += 1
  totalPower += multiplier


  //+ total of all multipliers
  update()
}

function update() {
  document.getElementById('powerOS').innerHTML = `${totalPower}`

}

function buyBoyFists() {
  if (totalPower >= clickUpgrades.boyFists.price) {
    totalPower -= clickUpgrades.boyFists.price;
    clickUpgrades.boyFists.price *= 1.5;
    clickUpgrades.boyFists.quantity++;
    totalPower = Math.round(totalPower)
    clickUpgrades.boyFists.price = Math.round(clickUpgrades.boyFists.price)
    document.getElementById('bbf').innerText = `Price: ${clickUpgrades.boyFists.price}`
  }
  boyFistsMultiplier()
  update()
}
function buyFollower() {
  if (totalPower >= automaticUpgrades.follower.price) {
    totalPower -= automaticUpgrades.follower.price;
    automaticUpgrades.follower.price *= 1.5;
    Math.round(automaticUpgrades.follower.price);
    automaticUpgrades.follower.quantity++;
    totalPower = Math.round(totalPower)
    automaticUpgrades.follower.price = Math.round(automaticUpgrades.follower.price)
    document.getElementById('buyfollow').innerText = `Price: ${automaticUpgrades.follower.price}`
  }
  collectAutoUpgrades()
  boyFistsMultiplier()
  update()
}
function collectAutoUpgrades() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}



function boyFistsMultiplier() {

  let quantity = clickUpgrades.boyFists.quantity
  let bfmultiplier = clickUpgrades.boyFists.multiplier
  if (quantity > 0) {
    multiplier += (quantity * bfmultiplier)
  }

}
