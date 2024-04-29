import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "../ContactList/ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const users = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const filteredContacts = users.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} id={id} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
