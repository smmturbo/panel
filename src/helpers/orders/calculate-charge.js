const calculateCharge = ({ quantity }, product) => {
  return parseFloat( (quantity * product.price / 1000).toFixed(2) )
}

export { calculateCharge }
