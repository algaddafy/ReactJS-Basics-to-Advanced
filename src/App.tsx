// const students = [
//   {id:0, name: 'Al Gaddafy', uid: '011191212'},
//   {id:1, name: 'Atik Sahriare', uid: '011191235'}
// ]

import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {id:0, name: 'Student1', uid: '011191001'},
    {id:1, name: 'Student2', uid: '011191002'}
  ]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
    .then(response => response.json())
    // .then(data => setStudents(data))
    .then(data => console.log(data));
  }, [])

  function addStudents (){
           //   [... spread operator]
    // setStudents([...students,{id:1, name: 'Atik Sahriare', uid: '011191235'}])
    setStudents(prevState =>[...prevState,{id:(prevState.length + 1), name: 'Student'+(prevState.length + 1), uid: '01119100'+(prevState.length + 1)}])
  }
  return (
    <div>
      <h1 style={{ color: 'red' }}>Beginners Level.</h1>

      <ul>
        {students.map( items => (
          <li key={items.id}> {items.uid +" - "+items.name} </li>
          // <li>{items.id + items.name}</li>
          // <li>{items.id} - {items.name}</li>
        ))}
      </ul>
      <button onClick={addStudents}>Add Students</button>

{/* ###############Error aste pare evabe dile################
$$$$$tai object er vitor prottek ta element er moddhe id/key dite hobe tahole error show hobe na$$$$$$
                          and the key or id filed should be unique

react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at App */}

              {/* Jodi duplicate entry dite chai tahole evabe index kore korte pari */}

      {/* <ul>
        {students.map( (items,index) => (
          <li key={items.id}> {items.uid +" - "+items.name} </li>
        ))}
      </ul> */}

      {/* <ul>
        {students.map( items => {
          if we use {} second bracket in this case then we have to give a return type
          return something
        })}
      </ul> */}
    </div>
  );
}

export default App;
