import {useState} from 'react';
import './styleList.css';

function List({contacts}) {
    //inputa veri girildigi anda state'e yazma
    const [filterText, setFilterText] = useState('');

    //filtereleme
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLowerCase());
        });    //objenin keys fullName ve phone number
    });

    return (
        <div>
            <input 
            placeholder='Filter contact' 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}></input>


            <ul>
                {filtered.map((contact,i) => (
                    <li key={i}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phone_number}</span>
                    </li>
                ))}
            </ul>

            <p>Total contacts {filtered.length}</p>
            <hr/>
        </div>
    );
}

export default List;
