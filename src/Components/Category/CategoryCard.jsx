import classes from "./category.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

// Defining the prop types
CategoryCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCard;
