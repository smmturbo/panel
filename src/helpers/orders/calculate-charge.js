const calculateCharge = ({ quantity }, product, customPrices) => {
  const price = customPrices ? (customPrices[product.id] || product.price) : product.price
  return parseFloat( (quantity * price / 1000).toFixed(2) )
}

export { calculateCharge }
