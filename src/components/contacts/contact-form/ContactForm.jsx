import parse from "html-react-parser";
export default function ContactForm(props) {
 
  return (
    <div className="contact-form-main-div">
      <div style={{
        fontFamily: "var(--main-family)",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
      }} className="contact-form-sub-div-notice">
    {
          parse(props.pages[1].body_html)}
      </div>
      <div className="contact-form-div">
        <form className="contact-form">
          <div>
            <input
            className="contact-form-input"
              type="text"
              id="contactFormFirstName"
              name="contact[FirstName]"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
            className="contact-form-input"
              type="text"
              id="contactFormLastName"
              name="contact[LastName]"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
            className="contact-form-input"
              type="text"
              id="contactFormCompanyName"
              name="contact[CompanyName]"
              placeholder="Company Name"
            />
          </div>
          <div>
            <input
            className="contact-form-input"
              type="text"
              id="contactFormAddress"
              name="contact[address]"
              placeholder="Address"
            />
          </div>
          <div>
            <input
            className="contact-form-input"
              type="email"
              id="contactFormEmail"
              name="contact[email]"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
            className="contact-form-textarea"
              rows="15"
              cols="90"
              id="contactFormMessage"
              name="contact[body]"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <input
            className="contact-form-submit-btn"
              type="submit"
              id="contactFormSubmit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
