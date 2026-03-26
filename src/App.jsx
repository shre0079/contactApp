import { AiFillPlusCircle } from "react-icons/ai";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex flex-grow items-center">
          <FiSearch className="absolute ml-1 text-3xl text-white" />
          <input
            type="text"
            className=" h-9.5 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
          />
        </div>

        <AiFillPlusCircle className="text-4xl text-white cursor-pointer" />
      </div>
      <div>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <HiOutlineUserCircle />
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
