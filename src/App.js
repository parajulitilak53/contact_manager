import React, { useState } from "react";
import Contact from "./components/Contact";

import "./styles/app.css";
import ContactAdder from "./components/contactAdder";
import NavBar from "./components/NavBar";
const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContact] = useState(getContacts ? getContacts : []); // contacts is an array of objects
  const addContactData = (contactData) => {
    const allContacts = [contactData, ...contacts];
    setContact(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  const clearAllContacts = () => {
    localStorage.clear();
    setContact([]);
  };
  return (
    <>
      <NavBar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>

      <div className="contact_list">
        <h3> Contact list:</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data} />
        ))}

        <button onClick={clearAllContacts} style={{ background: "#cc0800" }}>
          Clear All Contacts
        </button>
      </div>
    </>
  );
};

export default App;
