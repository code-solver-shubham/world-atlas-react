const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // stop page reload

    const formData = new FormData(e.target);
    const formInputData = Object.fromEntries(formData.entries());

    console.log(formInputData);

    // optional: reset form
    e.target.reset();
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            className="form-control"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;