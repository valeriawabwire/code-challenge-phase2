// import React from 'react'
// import Item from './Item';
// function List() {
//   return (
//     <div>List</div>
//   )
// }

// export default List
import React from 'react';
import Item from './Item';

function List({ people, deletePerson, updatePerson }) {
  return (
    <div>
      {people.map(person => (
        <Item key={person.id} person={person} deletePerson={deletePerson} updatePerson={updatePerson} />
      ))}
    </div>
  );
}

export default List;