import Card from "../card/Card";
import Navbar from "../navbar/Navbar";
import "./homePage.css";

const HomePage = () => {
  const cards = [
    { id: 1, imageUrl: "clothe.JPG" },
    { id: 2, imageUrl: "furniture.JPG" },
    { id: 3, imageUrl: "3dproduct.JPG" },
  ];

  return (
    <div className="homepageContainer">
      <Navbar />
      <div className="homepageCards">
        {cards.map((c) => (
          <Card cardId={c.id} imageUrl={c.imageUrl} />
        ))}
      </div>
      <div className="homepageText">
        <p>Create your own style</p>
      </div>
    </div>
  );
};

export default HomePage;
