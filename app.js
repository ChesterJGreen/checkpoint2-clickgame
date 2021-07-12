let power = 0
let energy = 0
let multiplier = 1
let aUpgrades = 0
let cUpgrades = 0
let autoClick = 0
let autoMultiplier = 0;
let updateCount = 0;


let clickUpgrades = {
  boyFists: {
    price: 100,
    quantity: 0,
    multiplier: 1,
    elementId: 'bbf'
  },
  manHands: {
    price: 10000,
    quantity: 0,
    multiplier: 100,
    elementId: 'bmh'
  },
  mjolnir: {
    price: 1000000,
    quantity: 0,
    multiplier: 1000,
    elementId: 'bmjnr'
  }
};
let automaticUpgrades = {
  follower: {
    price: 600,
    quantity: 0,
    multiplier: 20,
    elementId: 'buyFollow'
  },
  soldier: {
    price: 35000,
    quantity: 0,
    multiplier: 200,
    elementId: 'bSoldier'
  },
  ladySiv: {
    price: 3500000,
    quantity: 0,
    multiplier: 2000,
    elementId: 'bladys'
  }
};

function buyUpgrade(upgradeName, purchasedQuantity) {
  if (clickUpgrades[upgradeName] && clickUpgrades[upgradeName].price * purchasedQuantity <= energy) {
    energy -= clickUpgrades[upgradeName].price
    clickUpgrades[upgradeName].price = clickUpgrades[upgradeName].price * 1.5
    clickUpgrades[upgradeName].price = Math.round(clickUpgrades[upgradeName].price)
    clickUpgrades[upgradeName].quantity = clickUpgrades[upgradeName].quantity + purchasedQuantity
    document.getElementById(clickUpgrades[upgradeName].elementId).innerText = `Price: ${clickUpgrades[upgradeName].price}`
    upgradeClickMultiplier(upgradeName, purchasedQuantity)
    update()
  }
}

function buyAutomatic(upgradeName, purchasedQuantity) {
  if (automaticUpgrades[upgradeName] && automaticUpgrades[upgradeName].price * purchasedQuantity <= energy) {
    energy -= automaticUpgrades[upgradeName].price
    automaticUpgrades[upgradeName].price = automaticUpgrades[upgradeName].price * 1.5
    automaticUpgrades[upgradeName].price = Math.round(automaticUpgrades[upgradeName].price)
    automaticUpgrades[upgradeName].quantity = automaticUpgrades[upgradeName].quantity + purchasedQuantity
    document.getElementById(automaticUpgrades[upgradeName].elementId).innerText = `Price: ${automaticUpgrades[upgradeName].price}`
    upgradeAutoMultiplier(upgradeName, purchasedQuantity)
    update()
  }
}

function upgradeClickMultiplier(key, purchasedQuantity) {
  if (clickUpgrades[key]) {
    let upgrade = clickUpgrades[key]
    let clickMultiplier = upgrade.multiplier
    let cMultiplier = purchasedQuantity * clickMultiplier
    multiplier += cMultiplier
  }
}

function upgradeAutoMultiplier(key, purchasedQuantity) {
  if (automaticUpgrades[key]) {
    let upgrade = automaticUpgrades[key]
    let aMultiplier = upgrade.multiplier
    autoMultiplier += purchasedQuantity * aMultiplier
  }
}

function powerOfThor() {
  energy += multiplier * 1
  update()
}

function collectAutoUpgrades() {
  energy += autoMultiplier;
  update()
}

let collectInterval = setInterval(collectAutoUpgrades, 3000);

function update() {
  energy = Math.round(energy);
  document.getElementById('powerOS').innerHTML = `${energy}`
  displayClickMultiplier()
  displayEachResource()
}

function displayClickMultiplier() {
  document.getElementById('clickM').innerText = `X ${multiplier}`
  document.getElementById('autoClickM').innerText = `X ${autoMultiplier}`
}

function displayEachResource() {
  document.getElementById('bbfq').innerText = `Own: ${clickUpgrades.boyFists.quantity}`
  document.getElementById('bmhq').innerText = `Own: ${clickUpgrades.manHands.quantity}`
  document.getElementById('bmjq').innerText = `Own: ${clickUpgrades.mjolnir.quantity}`
  document.getElementById('bfq').innerText = `Own: ${automaticUpgrades.follower.quantity}`
  document.getElementById('bsq').innerText = `Own: ${automaticUpgrades.soldier.quantity}`
  document.getElementById('bls').innerText = `Own: ${automaticUpgrades.ladySiv.quantity}`
}

