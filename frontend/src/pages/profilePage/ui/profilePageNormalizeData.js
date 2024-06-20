const profilePageNormalizeData = (registerInputsValue) => {
  return {
   first: registerInputsValue.name.first,
    middle: registerInputsValue.name.middle,
    last: registerInputsValue.name.last,
    phone: registerInputsValue.phone,
    url: registerInputsValue.image.url,
    alt: registerInputsValue.image.alt,
    state: registerInputsValue.address.state,
    country: registerInputsValue.address.country,
    city: registerInputsValue.address.city,
    street: registerInputsValue.address.street,
    houseNumber: registerInputsValue.address.houseNumber.toString(),
    zip: registerInputsValue.address.zip.toString(),
  };
};

const profilePageNormalizeNewData=(userInfo)=>{
  return {
    name: {
      first: userInfo.first,
      middle: userInfo.middle,
      last: userInfo.last,
    },
    phone: userInfo.phone,
    password: userInfo.password,
    image: {
      url: userInfo.url,
      alt: userInfo.alt,
    },
    address: {
      state: userInfo.state,
      country: userInfo.country,
      city: userInfo.city,
      street: userInfo.street,
      houseNumber: +userInfo.houseNumber,
      zip: +userInfo.zip,
    },
  };
};

export { profilePageNormalizeData, profilePageNormalizeNewData };
