import React from 'react'

const contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9ac766c1-5c8e-44ea-abd9-d9dac81ba441");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='container' style={{marginTop:"15vh"}}>
<section>
  <form action="" onSubmit={onSubmit} >
    <h2>Contact</h2>
    <div className="input-box">
      <label htmlFor="">full name</label>
      <input type="text" name="name" required/>
    </div>
    <div className="input-box">
      <label htmlFor="">phone</label>
      <input   type="tel" name="tell" required/>
    </div>
    <div className="input-box">
      <label htmlFor="">Email</label>
      <input type="email" name="email" required/>
    </div>
    <div className="input-box">
      <label htmlFor="">subject</label>
      <input type="text" name="text" required/>
    </div>
    <div className="input-box">
      <label htmlFor="">message</label>
      <textarea name="message" required></textarea>
    </div>
    <button type="submit">Submit Form</button>

  </form>
</section>
    </div>
  )
}

export default contact