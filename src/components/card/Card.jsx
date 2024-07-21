import "./card.css";

const Card = (props) => {
  return (
    <div
      className="cardContainer"
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="blurDiv"></div>
      <div className="cardContent">
        <div className="cardContentFirst">
          Look for ready 3D products and configurate
        </div>
        <div className="cardContentThird">We can design and model for you</div>
      </div>
    </div>
  );
};

export default Card;
