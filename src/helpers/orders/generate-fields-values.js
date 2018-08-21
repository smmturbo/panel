import _ from 'lodash'

const generateFieldsValues = (values) =>  {

  const data = {}

  _.forEach(values, (value, key) => {

    if(key !== 'quantity')  {
      data[key] = value
    }
  })

  return data
}

export { generateFieldsValues }
