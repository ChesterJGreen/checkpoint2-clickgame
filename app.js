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
  console.log(totalPower)

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
    Math.round(clickUpgrades.boyFists.price);
    clickUpgrades.boyFists.quantity++;
    totalPower = Math.round(totalPower)
  }
  boyFistsMultiplier()
  update()
}
function boyFistsMultiplier() {

  let quantity = clickUpgrades.boyFists.quantity
  let bfmultiplier = clickUpgrades.boyFists.multiplier
  if (quantity > 0) {
    multiplier += (quantity * bfmultiplier)
  }

}
function buyFollower() {
  alert('purchased Soldier')
  let quantity = automaticUpgrades.follower.quantity;
  quantity++
  console.log(quantity);
  collectAutoUpgrades()
}

function collectAutoUpgrades() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

// // cup = ClickUpgradesPurchased
// function upgrades() {
//   let cup
//   for (let key in clickUpgrades) {
//     let quantity = clickUpgrades[key].quantity

//   }
//   if (clickUpgrades = !0) { power *= quantity * multiplier }
// }