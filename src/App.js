import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [APIdata, setAPIData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => { fetchContacts(); }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setAPIData(sortedData);
            setFilteredData(sortedData);


        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const [contact, setContact] = React.useState(null);


    const showContact = (event) => {
        console.log(event.currentTarget.id)

        setContact(filteredData.find(contact => contact.id === parseInt(event.currentTarget.id)));

        const allContactTabs = document.querySelectorAll('.contact-tab-selected');
        allContactTabs.forEach(tab => tab.className = 'contact-tab');

        const contactTabNameElement = document.getElementById(event.currentTarget.id);
        if (contactTabNameElement) {
            contactTabNameElement.className = "contact-tab-selected";

        } else {
            console.error('Element with ID "contact-tab" not found.');
        }

    }


    const findContact = (event) => {
        const searchItem = event.target.value.toLowerCase();
        console.log(searchItem);
        if (!searchItem) {
            setFilteredData(APIdata);
        } else {
            const filtered = APIdata.filter(contact =>
                contact.name.toLowerCase().includes(searchItem)
            );
            setFilteredData(filtered);
        }
    };


    return (
        <div className="contact-container">
            <div className="contact-search-container">

                <div className='contact-search'>
                    <input type="text" placeholder="Search your contact here" className="search-bar" onChange={findContact} />
                </div>

                <div className="contact-list">

                    {filteredData.map((contact) => (
                        <div key={contact.id} id={contact.id} onClick={showContact} className="contact-tab">
                            <p className="contact-tab-name">{contact.name}</p>
                        </div>
                    ))}
                </div>

            </div>


            <div className='contact-information-container'>
                {contact &&
                    <div className='contact-information'>
                        <div className="contact-information-name"> {contact.name} </div>
                        <div className="contact-information-company">
                            <strong>{contact.company.name}</strong>
                            : {contact.company.bs}<br />

                        </div>

                        <div className="contact-details">
                            <div className="contact-label">Company Slogan</div>
                            <div className='contact-value'>{contact.company.catchPhrase}</div>
                            
                            <div className="contact-label">Phone</div>
                            <div className='contact-value'>{contact.phone}</div>

                            <div className="contact-label">Email</div>
                            <div className='contact-value'>{contact.email}</div>

                            <div className="contact-label"> Address</div>
                            <div className='contact-value'>
                                {contact.address.suite}, &nbsp;{contact.address.street} <br />
                                {contact.address.city}, &nbsp;{contact.address.zipcode}<br />
                                Geo:<br />
                                Latitude: {contact.address.geo.lat}<br />
                                Longitude: {contact.address.geo.lng}<br />
                            </div>


                            <div className="contact-label">Website </div>
                            <div className='contact-value'>{contact.website}</div>


                        </div>
                    </div>

                }
            </div>
        </div >
    )
};

export default App;