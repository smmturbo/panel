const QuantityMultipleOfTen = (value) => {

  const num = parseInt(value, 10)

  if( isNaN(num) ) {
    return {error: true, message: 'Invalid quantity / Quantidade inválida.'}
  }

  if(num%10 > 0)  {
    return { error: true, message: 'Quantity must be multiple of 10.' }
  }

  return { error: false, value: num }
}

const QuantityMultipleOfTwentyFive = (value) => {

  const num = parseInt(value, 10)

  if( isNaN(num) ) {
    return {error: true, message: 'Invalid number / Número inválido.'}
  }

  if(num%25 > 0)  {
    return { error: true, message: 'Quantity must be multiple of 25.' }
  }

  return { error: false, value: num }
}

const IsInteger = (value) => {

  const num = parseInt(value, 10)

  if( isNaN(num) ) {
    return { error: true, message: 'Invalid number / Número inválido.' }
  }

  if(num%1 > 0)  {
    return { error: true, message: 'Number ust be integer / Número deve ser inteiro.' }
  }

  return { error: false, value: num }
}



export default { QuantityMultipleOfTen, IsInteger, QuantityMultipleOfTwentyFive }
