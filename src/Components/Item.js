// import React from 'react'

// function Item() {
//   return (
//     <div>Item</div>
//   )
// }

// export default Item;
import React, { useState } from 'react';

function Item({ person, deletePerson, updatePerson }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPerson, setEditedPerson] = useState({ ...person });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updatePerson(person.id, editedPerson);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedPerson({ ...person });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedPerson.first_name}
            onChange={(e) => setEditedPerson({ ...editedPerson, first_name: e.target.value })}
          />
          <input
            type="text"
            value={editedPerson.last_name}
            onChange={(e) => setEditedPerson({ ...editedPerson, last_name: e.target.value })}
          />
          <input
            type="text"
            value={editedPerson.email}
            onChange={(e) => setEditedPerson({ ...editedPerson, email: e.target.value })}
          />
          <input
            type="text"
            value={editedPerson.gender}
            onChange={(e) => setEditedPerson({ ...editedPerson, gender: e.target.value })}
          />
          <input
            type="number"
            value={editedPerson.fee_balance}
            onChange={(e) => setEditedPerson({ ...editedPerson, fee_balance: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{person.first_name} {person.last_name}</p>
          <p>Email: {person.email}</p>
          <p>Gender: {person.gender}</p>
          <p>Fee Balance: {person.fee_balance}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deletePerson(person.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Item;