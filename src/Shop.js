export default class Shop {
  constructor(player) {
    this.shop = document.getElementById("shop");
    this.costs = [100, 60, 150, 500, 1000];
    this.levels = [1, 1, 1, 0, 1];
    const closeButton = document.getElementById("close-shop");
    closeButton.onclick = this.hide;
    this.visible = false;
    this.updateAvailability(player);
  }
  show = () => {
    if (!this.visible) {
      this.shop.style.display = "flex";
      this.visible = true;
    } else {
      this.hide();
    }
  };
  hide = () => {
    this.shop.style.display = "none";
    this.visible = false;
  };
  updateAvailability = player => {
    for (let i = 0; i < this.costs.length; i++) {
      const btn = document.getElementsByClassName("btn-shop")[i];
      if (this.levels[i] == 3 && (i == 2 || i == 4)) {
        btn.style.background = "#0c0c0c";
        btn.style.boxShadow = "inset 0 0 10px black";
        btn.style.color = "#fff";
        btn.onclick = null;
      } else if (this.costs[i] > player.gold) {
        btn.style.background = "#8B4513";
        btn.style.boxShadow = "inset 0 0 5px black";
      } else {
        btn.style.background = "#455B13";
        btn.style.boxShadow = "0 0 5px black";
      }
    }
  };
  update = (upgradeId, player) => {
    this.levels[upgradeId] += 1;
    this.costs[upgradeId] = Math.round(this.costs[upgradeId] * 2.2);

    const costNode = document.getElementsByClassName("cost")[upgradeId];
    const levelNode = document.getElementsByClassName("level")[upgradeId];

    if (this.levels[upgradeId] == 3 && (upgradeId == 2 || upgradeId == 4)) {
      costNode.innerHTML = ``;
      levelNode.innerHTML = `Level: MAX`;
    } else {
      costNode.innerHTML = `Cost: ${this.costs[upgradeId]}`;
      levelNode.innerHTML = `Level: ${this.levels[upgradeId]}`;
    }

    this.updateAvailability(player);
  };
}
