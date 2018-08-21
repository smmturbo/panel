const QuantityMultipleOfTen = (value) => {

  const num = parseInt(value, 10)

  if( isNaN(num) ) {
    return {error: true, message: 'Quantidade inválida'}
  }

  if(num%10 > 0)  {
    return { error: true, message: 'Quantidade deve ser múltipla de 10' }
  }

  return { error: false, value: num }
}

const QuantityMultipleOfTwentyFive = (value) => {

  const num = parseInt(value, 10)

  if( isNaN(num) ) {
    return {error: true, message: 'Quantidade inválida'}
  }

  if(num%25 > 0)  {
    return { error: true, message: 'Quantidade deve ser múltipla de 25' }
  }

  return { error: false, value: num }
}

const IsInteger = (value) => {

  const num = parseInt(value, 10)

  if( isNaN(num) ) {
    return { error: true, message: 'Número inválido' }
  }

  if(num%1 > 0)  {
    return { error: true, message: 'Número deve ser inteiro' }
  }

  return { error: false, value: num }
}



export default { QuantityMultipleOfTen, IsInteger, QuantityMultipleOfTwentyFive }
