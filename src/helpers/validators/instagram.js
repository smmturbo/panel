const InstagramProfile = (value) => {

  // Detect @
  if(value.search(/@/) >= 0)   {
    value = removeAt(value)
  }

  return { error: false, value }
}

const InstagramProfileLink = (value) => {

  if(!value)  {
    return { error: true, message: 'Link informado é inválido.' }
  }

  if(value.search(/instagram.com\/p\//) >= 0)  {
    return { error: true, message: 'Link informado é inválido.' }
  }

  // Detect @
  if(value.search(/@/) >= 0)   {
    value = removeAt(value)
  }

  // Detect if has full Instagram URL
  if( value.search(/instagram.com/) < 0 )  {
    value = insertFullUrl(value)
  }

  return { error: false, value }
}

const InstagramPostLink = (value) =>  {

  if(!value)  {
    return { error: true, message: 'Link informado é inválido.' }
  }

  if(value.search(/instagram.com\/p\//) < 0)  {
    return { error: true, message: 'Link informado é inválido' }
  }

  return { error: false, value }
}

export default {
  InstagramProfile,
  InstagramProfileLink,
  InstagramPostLink
}


const removeAt = (value) =>  {
  return value.split('@').pop()
}

const insertFullUrl = (value) => {
  return 'https://www.instagram.com/' + value
}
