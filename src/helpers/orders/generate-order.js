
import { generateQuantity, generateFieldsValues, calculateCharge } from './'

const generateOrder = (values, product) => {

  const date = new Date().toString()
  const status = 'Pending'
  const quantity = generateQuantity(values, product.quantityModifier)

  return {
    product, // We use the full Product object because a product might change but an order should not
    amount: calculateCharge(quantity, product),
    panelOrder: {
      ...quantity,
      ...generateFieldsValues(values)
    },
    status,
    createdOn: date,
    modifiedOn: date,
    type: product.type,
    user: null
  }
}

export { generateOrder }
