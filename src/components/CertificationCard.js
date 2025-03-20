import { Col } from "react-bootstrap";

export const CertificationCard = ({ title, description, imgUrl, url }) => {
  const handleCardClick = () => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="cert-imgbx" onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <img src={imgUrl} alt={title} />
        <div className="cert-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};