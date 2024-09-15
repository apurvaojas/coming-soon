import classes from "./app.module.css";
import Banner from "./svgviewer-output.svg";

const Home = () => {
  return (
    <div className={classes.container}>
      <Banner />
      <h1 className={classes.title}>Coming Soon!</h1>
    </div>
  );
};

export default Home;
