import image from "../assets/no-image.png";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100&", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 45).concat("...")}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 87).concat("...")
            : "Interesting News!"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
