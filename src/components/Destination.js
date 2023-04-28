import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";


const Destination = () => {
  return (
    <div className="destination">
      <h1>Popüler Yerler</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <DestinationData
      className="first-des"
      heading="Taal Volcano"
      text="It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content
      here', making it look like readable English"
      img1={Mountain1}
      img2={Mountain2}
      />

<DestinationData
      className="first-des-reverse"
      heading="Venice,Italy"
      text="It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content
      here', making it look like readable English"
      img1={Mountain3}
      img2={Mountain4}
      />

      
    </div>
  );
};

export default Destination;
