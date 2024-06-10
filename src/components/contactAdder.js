import { useState } from "react";
const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number: mobile, location };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setNumber("");
      setLocation("");
    }
  };
  return (
    <>
      <div className="simpleAdder">
        <h3>Contact adder:</h3>
        <form action="" onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
