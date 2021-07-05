let power = 0
let totalPower = 0
let multiplier = 0
let aUpgrades = 0
let cUpgrades = 0
let autoClick = 0
let autoMultiplier = 0
// // let allCModifiers = for (let modifiers in clickUpgrades) {
// //   clickUpgrades[modifiers].multiplier
// }
let clickUpgrades = {
  boyFists: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  manHands: {
    price: 10000,
    quantity: 0,
    multiplier: 100
  }
};
let automaticUpgrades = {
  follower: {
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  soldier: {
    price: 10000,
    quantity: 0,
    multiplier: 100
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
  totalPower = Math.round(totalPower)
  document.getElementById('powerOS').innerHTML = `${totalPower}`

}
function buyUpgrade(upgradeName, purchasedQuantity) {
  if (clickUpgrades[upgradeName] && clickUpgrades[upgradeName].price * purchasedQuantity <= totalPower) {
    totalPower -= clickUpgrades[upgradeName].price
    clickUpgrades[upgradeName].price * 1.5
    clickUpgrades[upgradeName].quantity = clickUpgrades[upgradeName].quantity + purchasedQuantity
    clickUpgrades[upgradeName].price = Math.round(clickUpgrades[upgradeName].price)
    document.getElementById(clickUpgrades[upgradeName].price).innerText = `Price: ${clickUpgrades[upgradeName].price}`
  }
  upgradeClickMultiplier(upgradeName, purchasedQuantity)
  update()
}

function upgradeClickMultiplier(key, purchasedQuantity) {
  if (clickUpgrades[key]) {
    let upgrade = clickUpgrades[key]
    let clickMultiplier = upgrade.multiplier
    let cMultiplier = purchasedQuantity * clickMultiplier
    multiplier += cMultiplier
  }
}

function collectAutoUpgrades() {
  totalPower += autoMultiplier;
  update()
  let collectionInterval = setInterval(collectAutoUpgrades, 3000)
}











// function buyBoyFists() {

//   if (totalPower >= clickUpgrades.boyFists.price) {
//     totalPower -= clickUpgrades.boyFists.price;
//     clickUpgrades.boyFists.price *= 1.5;
//     clickUpgrades.boyFists.quantity++;
//     clickUpgrades.boyFists.price = Math.round(clickUpgrades.boyFists.price)
//     document.getElementById('bbf').innerText = `Price: ${clickUpgrades.boyFists.price}`
//   }
//   upgradeClickMultiplier('boyFists')
//   // boyFistsMultiplier()
//   update()
// }
function buyAutoUpgrade() {
  if (totalPower >= automaticUpgrades.follower.price) {
    totalPower -= automaticUpgrades.follower.price;

    automaticUpgrades.follower.price *= 1.5;
    Math.round(automaticUpgrades.follower.price);
    automaticUpgrades.follower.quantity++;

    automaticUpgrades.follower.price = Math.round(automaticUpgrades.follower.price)
    document.getElementById('buyfollow').innerText = `Price: ${automaticUpgrades.follower.price}`
  }

  auFollowerMult()
  update()
}
function upgradeAutoMultiplier() { }


//instead of upgrading multiplier we upgrade the autoMultiplier

//phil - take automultiplier and add it to power 
///update ()

// function collectAutoUpgrades() {
//   collectionInterval = setInterval(collectAutoUpgrades, 3000);
//   let quantity = automaticUpgrades.follower.quantity
//   let fmultiplier = automaticUpgrades.follower.multiplier
//   if (quantity > 0) {
//     multiplier += (quantity * fmultiplier)
//   }
//   //collectionInterval powerOfThor()
// }


// function boyFistsMultiplier() {

//   let quantity = clickUpgrades.boyFists.quantity
//   let bfmultiplier = clickUpgrades.boyFists.multiplier
//   let bfMult = quantity * bfmultiplier
//   if (quantity > 0) {
//     multiplier = (bfMult)
//   }

// }

// function auFollowerMult() {

//   let quantity = automaticUpgrades.follower.quantity
//   let fmultiplier = automaticUpgrades.follower.multiplier
//   if (quantity > 0) {
//     multiplier = (quantity * fmultiplier)
//   }
  // document.getElementById('blankimage').innerHTML = 

//}

// function UpMultiplier() {
//   let clQuantity = clickUpgrades[key].quantity
//   let clMultiplier = clickUpgrades[key].multiplier
//   let auQuantity = automaticUpgrades[key].quantity
//   let auMultiplier = automaticUpgrades[key].multiplier
//   if (clQuantity > 0) {
//     multiplier = (clQuantity * clMultiplier)
//   }
//   if (auQuantity > 0) {
//     multiplier = (auQuantity * auMultiplier)
//   }
// }
// trying to combine the multiplier classes 
