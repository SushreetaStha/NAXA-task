import "./card.css";

function Card(props) {
  const data = props.data;

  return (
    <div className="mycard container" id={data.id}>
      <div className="image">
        <img src={data.photo}></img>
      </div>
      <div className="description">
        <div className="icon">
          <img src={data.icon}></img>
        </div>
        <h2 className="title">{data.title}</h2>
        <div
          className="desc-1"
          dangerouslySetInnerHTML={{ __html: data.description1 }}
        ></div>
        <div
          className="desc-2 alert alert-primary"
          dangerouslySetInnerHTML={{ __html: data.description2 }}
        ></div>
      </div>
    </div>
  );
}

export default Card;
