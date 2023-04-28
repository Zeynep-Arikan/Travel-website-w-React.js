import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/services.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import "../components/pickerdate.css";
import ReactDOM from "react-dom/client";
import Form from "react-bootstrap/Form";



function Service() {
  const [value, setValue] = useState([
    new DateObject().setDay(15),
    new DateObject().add(1, "month").setDay(15),
  ]);

  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Turlarımız"
        text="Bireysel bir tur ya da arkadaşlarınızla seçim sizin"
      ></Hero>

      <div className="datepicker">
        {/* nereye gittiğini kaç kişi gittiğini ve hangi tarihlrde gittiğini gösteren yer */}

        <form onSubmit={handleSubmit}>
          <label>
            Yolculuk Nereye?
            <input
              className="yolculuk-nereye"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </form>

        <label>Tarih seçin</label>
        <DatePicker
          value={value}
          onChange={setValue}
          range
          numberOfMonths={2}
          plugins={[]}
        />
        <Form.Select aria-label="Default select example">
          <option>Misafir Sayısı</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Daha fazla</option>
        </Form.Select>
        <input className="ara-butonu" type="submit" />
      </div>

      <Trip></Trip>
      <Footer></Footer>
      
      
    </>
  );
}

export default Service;
