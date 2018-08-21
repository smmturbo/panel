
import { generateQuantity, generateFieldsValues, calculateCharge } from './'

const generateOrder = (values, product, customPrices) => {

  const date = new Date().toString()
  const status = 'pending'
  const quantity = generateQuantity(values, product.quantityModifier)

  return {
    product, // We use the full Product object because a product might change but an order should not
    charge: calculateCharge(quantity, product, customPrices),
    panelOrder: {
      ...quantity,
      ...generateFieldsValues(values)
    },
    status,
    createdOn: date,
    modifiedOn: date,
    type: product.type,
    user: null,
    source: 'web'
  }
}

export { generateOrder }
