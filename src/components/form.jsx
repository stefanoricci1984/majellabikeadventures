import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  selectedDate: "",
  selectedOption: "",
  numberOfPeople: ""
};

const FormComponent = () => {
  const [{ name, email, phoneNumber, selectedDate, selectedOption, numberOfPeople }, setState] = useState(initialState);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phoneNumber,
      selectedDate,
      selectedOption,
      numberOfPeople,
    };

    try {
      // Invia l'email di conferma all'utente
      await emailjs.send(
        'service_0nsb3an', // Sostituisci con il tuo service_id
        'template_vibzttq', // Sostituisci con il template_id per la conferma all'utente
        templateParams,
        'iLUGmslbhOl3FGTrm' // Sostituisci con il tuo user_id (public key)
      );

      // Invia l'email di riepilogo a te stesso
      await emailjs.send(
        'service_0nsb3an', // Sostituisci con lo stesso service_id
        'template_plp53ek', // Sostituisci con il template_id per il riepilogo a te stesso
        {
          ...templateParams,
          to_email: 'stefanoricci222@gmail.com' // Assicurati che questo sia il tuo indirizzo email
        },
        'iLUGmslbhOl3FGTrm' // Sostituisci con lo stesso user_id
      );

      clearState();
      setBookingConfirmed(true);
    } catch (error) {
      console.error('Failed to send emails:', error);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <h2>Booking shuttle bike</h2>
              <p>Compilare il form e in breve tempo sarete ricontattati dal nostro Team per confermare la prenotazione</p>
            </div>
            <form name="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                      value={phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="date"
                      id="selectedDate"
                      name="selectedDate"
                      className="form-control"
                      required
                      min={today}
                      value={selectedDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <select
                      id="selectedOption"
                      name="selectedOption"
                      className="form-control"
                      required
                      value={selectedOption}
                      onChange={handleChange}
                    >
                      <option value="">Select Option</option>
                      <option value="Mattina">Mattina</option>
                      <option value="Pomeriggio">Pomeriggio</option>
                      <option value="Intero">Giornata Intera</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="number"
                      id="numberOfPeople"
                      name="numberOfPeople"
                      className="form-control"
                      placeholder="Numero di persone"
                      value={numberOfPeople}
                      onChange={handleChange}
                      required
                      min={1}
                      max={20}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}></div>
              <button type="submit" className="btn btn-custom btn-lg" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {bookingConfirmed && <div className="confirmation-message">Prenotazione effettuata!A breve sarete contattati dal nostro Team</div>}
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
          <div className="contact-item">
            <h3>Contact Info</h3>
            <p>
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>
              Majella Bike Adventures
            </p>
            <p> Via Collerotondo 44, 65020 Lettomanoppello(PE)</p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i> Phone
              </span>{" "}
              <a href="tel:+393279179819">+39-3279179819</a>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>{" "}
              <a href="mailto:majellabikeadv@gmail.com">majellabikeadv@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/people/Majella-bike-adventures/100063456821882/?sk=about" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/majella.bike.adventures/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=6AW5Ww72ioQ" target="_blank">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
              <div className="privacy-policy-link">
                <a href="/privacy-policy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Design by{" "}
            <a rel="nofollow">
              RS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
