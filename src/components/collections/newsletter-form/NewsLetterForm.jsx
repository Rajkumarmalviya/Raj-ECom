export default function NewsLetterForm() {
  return (
    <div className="news-letter-form-main-div">
      <h3>Subscribe to our newsletter</h3>
      <p className="newsletter-sub-heading">
        Signup to receive news and updates
      </p>
      <input
        className="newsletter-input"
        type="email"
        name="contact[email]"
        id="Email"
        
        placeHolder="Email Address"
        autoCorrect="off"
        autoCapitalize="off"
      ></input>

      <button
        type="submit"
        className="btn newsletter__submit"
        name="commit"
        id="Subscribe"
      >
        <span className="newsletter__submit-text--large">Join</span>
      </button>
      
    </div>
  );
}
