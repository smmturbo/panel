import _ from 'lodash'

const generateFieldsValues = (values) =>  {

  const data = {}
  delete values.quantity

  _.map(values, (value, key) => {
      data[key] = value
  })

  return data
}

export { generateFieldsValues }
