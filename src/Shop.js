export default class Shop {
  constructor() {
    this.shop = document.getElementById("shop");
    this.costs = [100, 60, 150, 500];
    this.levels = [1, 1, 1, 0];
    const closeButton = document.getElementById("close-shop");
    closeButton.onclick = this.hide;
    this.visible = false;
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
  update = upgradeId => {
    this.levels[upgradeId] += 1;
    this.costs[upgradeId] = Math.round(this.costs[upgradeId] * 2.2);

    const costNode = document.getElementsByClassName("cost")[upgradeId];
    costNode.innerHTML = `Cost: ${this.costs[upgradeId]}`;
    const levelNode = document.getElementsByClassName("level")[upgradeId];
    levelNode.innerHTML = `Level: ${this.levels[upgradeId]}`;
  };
}
