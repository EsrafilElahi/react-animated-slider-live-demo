/* eslint-disable react/prop-types */
import "./App.css";
import VerticalAnimatedCarousel from "react-vertical-animated-slider";
import styles from "./CardItem.module.css";

const CardItem = ({ card }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.imageContainer}>
        <img
          src={"https://fakeimg.pl/300/"}
          alt="user"
          className={styles.image}
        />
      </div>

      <div className={styles.textContainer}>
        <span className={styles.id}>id : {card?.id}</span>
        <span className={styles.name}>{card?.name}</span>
      </div>
    </div >
  );
};

const CardItem2 = ({ card }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.textContainer2}>
        <span className={styles.id}>id : {card?.id}</span>
        <span className={styles.name}>{card?.name}</span>
      </div>
    </div >
  );
};

function App() {
  const data = [
    {
      id: 1,
      name: "title",
    },
    {
      id: 2,
      name: "title",
    },
    {
      id: 3,
      name: "title",
    },
    {
      id: 4,
      name: "title",
    },
    {
      id: 5,
      name: "title",
    },
    {
      id: 6,
      name: "title",
    },
    {
      id: 7,
      name: "title",
    },
  ];

  return (
    <div className="" style={{ width: "100%" }}>
      <span>example 1</span>
      <VerticalAnimatedCarousel data={data} CardItem={CardItem} cardItemClassName="w-10" />

      <hr style={{ margin: '3rem 0' }} />

      <span style={{ marginBottom: '1rem' }}>example 2</span>
      <VerticalAnimatedCarousel data={data} CardItem={CardItem2} containerStyle={{ height: '10rem', marginTop: '2rem' }} carouselStyle={{ height: '10rem' }} cardItemStyle={{ height: '10rem' }} />
    </div>
  );
}

export default App;
