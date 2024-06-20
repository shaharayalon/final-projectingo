const normalaizeCreateCard=(createCardData)=>{
    return{ 
    title: createCardData.title,
    subtitle: createCardData.subtitle,
    description: createCardData.description,
    phone: createCardData.phone,
    email: createCardData.email,
    url: createCardData.url,
    alt: createCardData.alt,
    state: createCardData.state,
    country: createCardData.country,
    city:createCardData.city,
    street:createCardData.street ,
    houseNumber:+createCardData.houseNumber ,
    zip:+createCardData.zip, 
};
}

const normalizeAxiosRequest=(createCardData)=>{
    return{
  title: createCardData.title,
  subtitle: createCardData.subtitle,
  description: createCardData.description,
  phone: createCardData.phone,
  email: createCardData.email,
  web: "www.bing.com",
  image: {
    url: createCardData.url,
    alt: createCardData.alt,
  },
  address: {
    state: createCardData.state,
    country: createCardData.country,
    city: createCardData.city,
    street: createCardData.street,
    houseNumber: +createCardData.houseNumber,
    zip: +createCardData.zip,
  }
};
}

export {normalaizeCreateCard, normalizeAxiosRequest};