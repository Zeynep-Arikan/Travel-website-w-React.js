import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Bize mesajınızı iletin</h1>
      <form>
        <input placeholder="İsim"></input>
        <input placeholder="Soyisim"></input>
        <input placeholder="E-mail"></input>
        <textarea placeholder="mesaj">Mesajınızı Yazın</textarea>
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default ContactForm;
