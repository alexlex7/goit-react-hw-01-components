function getRandomColor() {
  return '#' + c() + c() + c();
}

function c() {
  var hex = Math.floor(Math.random() * 201).toString(16);
  return `0${String(hex)}`.substr(-2); // pad with zero
}
export default getRandomColor;
