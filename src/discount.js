function calculateTotal(price, isMember) {
  var discount = 0;

  if (isMember) {
    if (price > 100) {
      discount = 0.15;
    } else {
      discount = 0.1;
    }
  } else {
    if (price > 100) {
      discount = 0.05;
    } else {
      discount = 0;
    }
  }

  return price - price * discount;
}

module.exports = { calculateTotal };