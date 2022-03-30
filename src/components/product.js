import "./product.css";
const Product = ({ image, name, description, price }) => {
  return (
    <div className="gird">
      <div className="prodContaioner">
        <img className="albumCover" src={image} alt={name} />
        <h1 className="artistName">{name}</h1>
        <p className="albumName">{description}</p>
        <p className="price">{price}</p>
        <button className="paymentButton">{"Buy Now"}</button>
      </div>
    </div>
  );
};
export default Product;
