import "./product.css";
import { checkout } from "../services/checkout";
const Product = ({ image, name, description, price, id }) => {
  return (
    <div className="grid">
      <div className="prodContaioner">
        <img className="albumCover" src={image} alt={name} />
        <div className="mq">
          <h1 className="artistName">{name}</h1>
          <p className="albumName">{description}</p>
          <p className="price">{price}</p>
        </div>
        <button
          onClick={() => {
            checkout(id);
          }}
          className="paymentButton"
        >
          {"Buy Now"}
        </button>
      </div>
    </div>
  );
};
export default Product;
