
import "./card.css";

const Card = ({ imageId, title }) => {
  return (
    <div className="my-10">
      <div className="card-container">
        <img
          src={`https://picsum.photos/id/${imageId}/400/200`}
          alt="Sample"
          className="card-image"
        />
        <h2 className="card-title">{title}</h2>
        <p className="card-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          libero quam. Fusce efficitur, lectus ac commodo maximus, neque augue
          tincidunt tellus, id dictum odio eros ac nulla.
        </p>
        <p className="card-paragraph">
          Vivamus at urna sit amet justo auctor vestibulum ut nec nisl. Sed
          auctor augue eget libero tincidunt, ut dictum libero facilisis.
          Phasellus non libero at nisi eleifend tincidunt a eget ligula.
        </p>
      </div>
    </div>
  );
};

export default Card;
