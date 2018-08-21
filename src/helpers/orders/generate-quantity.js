
const generateMinMaxPosts = (values) =>  {
  const intQuantity = parseInt(values.quantity, 10)
  const posts = parseInt( values.posts, 10 )
  return {
    min: intQuantity,
    max: intQuantity,
    posts,
    quantity: intQuantity * posts
  }
}

const quantityModifiers = {
  min_max_posts: generateMinMaxPosts
}

const generateQuantity = (values, modifier) => {

  if(quantityModifiers[modifier]) {
    return quantityModifiers[modifier](values)
  }

  return { quantity: parseInt(values.quantity, 10) }
}

export { generateQuantity }
