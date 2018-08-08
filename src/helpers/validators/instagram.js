const validateInstagramProfile = (value) => {
  return value
}

const validateInstagramProfileLink = (value) => {

  if(value.search(/instagram.com\/p\//) >= 0)  {
    return false
  }

  // Detect @
  if(value.search(/@/) >= 0)   {
    value = removeAt(value)
  }

  // Detect if has full Instagram URL
  if(value.search(/instagram.com/) > 0)  {
    value = insertFullUrl(value)
  }

  return value
}

const validateInstagramPostLink = (value) =>  {

  if(value.search(/instagram.com\/p\//) < 0)  {
    return false
  }

  return value
}

export default {
  validateInstagramProfile,
  validateInstagramProfileLink,
  validateInstagramPostLink
}


const removeAt = (value) =>  {
  return value.split('@').pop()
}

const insertFullUrl = (value) => {
  return 'https://www.instagram.com/' + value
}
