const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = `${process.env.REACT_APP_API_URL}/products`;
  const response = await fetch(url);
  //const products = [];
  const products = await response.json();
  console.log(products);
  return products;
};

export { getProducts };
