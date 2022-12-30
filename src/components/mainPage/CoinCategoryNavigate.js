import { Link } from "react-router-dom";
import classes from "./CoinCategory.module.css";

const CoinCategoryNavigate = ({ name, img }) => {
  return (
    <div className={classes.container}>
      <h2>{name}</h2>
      <Link to={`/categories/${name}`}>Show All &#8594;</Link>
      <div>
        <img src={img} alt="classic coin" />
      </div>
    </div>
  );
};

export default CoinCategoryNavigate;
