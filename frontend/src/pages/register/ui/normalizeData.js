const normalizeData = (registerInputsValue, checked) => {
  return {
    name: {
      first: registerInputsValue.first,
      middle: registerInputsValue.middle,
      last: registerInputsValue.last,
    },
    phone: registerInputsValue.phone,
    email: registerInputsValue.email,
    password: registerInputsValue.password,
    image: {
      url: registerInputsValue.url,
      alt: registerInputsValue.alt,
    },
    address: {
      state: registerInputsValue.state,
      country: registerInputsValue.country,
      city: registerInputsValue.city,
      street: registerInputsValue.street,
      houseNumber: +registerInputsValue.houseNumber,
      zip: +registerInputsValue.zip,
    },
    isBusiness: checked,
  };
};

export { normalizeData };
