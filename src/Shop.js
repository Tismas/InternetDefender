export default class Shop {
  constructor() {
    this.shop = document.getElementById("shop");
    this.costs = [100, 60, 150, 500];
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
  updateCost = upgradeId => {
    this.costs[upgradeId] = Math.round(this.costs[upgradeId] * 1.5);
    const costNode = document.getElementsByClassName("cost")[upgradeId];
    costNode.innerHTML = `Cost: ${this.costs[upgradeId]}`;
  };
}
