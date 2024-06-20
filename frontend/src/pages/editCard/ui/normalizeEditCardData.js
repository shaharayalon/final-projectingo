const normalizeEditCardData =(data)=>{

    return{
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    phone: data.phone,
    email: data.email,
    url: data.image.url,
    alt: data.image.alt,
    state: data.address.state,
    country: data.address.country,
    city:data.address.city,
    street:data.address.street ,
    houseNumber:data.address.houseNumber ,
    zip:data.address.zip, 
};
}

export{normalizeEditCardData}

