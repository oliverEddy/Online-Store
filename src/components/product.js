const Product = ({ image, name, description, price }) => {
  return (
    <div className="">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button>{price}</button>
    </div>
  );
};
export default Product;
