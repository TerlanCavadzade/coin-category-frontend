import CoinCategoryNavigate from "./CoinCategoryNavigate";
import classes from "./MainPageLayout.module.css";
import firstimg from "../images/first.svg";
import secondimg from "../images/second.svg";
import thirdimg from "../images/third.svg";

const MainPageLayout = () => {
  return (
    <div className={classes.container}>
      <CoinCategoryNavigate img={firstimg} name="Bullion coins" />
      <CoinCategoryNavigate img={secondimg} name="Exclusive coins" />
      <CoinCategoryNavigate img={thirdimg} name="Commemorative coins" />
    </div>
  );
};

export default MainPageLayout;
