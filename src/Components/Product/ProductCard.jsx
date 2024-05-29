import { useContext } from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { id, image, title, rating, price, description } = product;

  const [, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "800px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* { * rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* racing counter */}
          <small> {rating?.count} </small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

// Define the prop type
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number,
    description: PropTypes.string,
  }),
  flex: PropTypes.bool,
  renderDesc: PropTypes.bool,
  renderAdd: PropTypes.bool,
};

export default ProductCard;
