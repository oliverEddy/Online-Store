const product = ({ image, name, description, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>{price}</button>
    </div>
  );
};
export default product;
