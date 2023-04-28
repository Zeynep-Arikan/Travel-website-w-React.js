import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>En Çok yıldızlanan yerler</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="italya gezisi"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
           a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
           from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
          discovered the undoubtable source."
        />

<TripData
          image={Trip2}
          heading="Fransa gezisi"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
           a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
           from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
          discovered the undoubtable source."
        />

<TripData
          image={Trip3}
          heading="Antalya gezisi"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
           a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
           from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
          discovered the undoubtable source."
        />
      </div>
    </div>
  );
}

export default Trip;
