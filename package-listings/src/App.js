// import React from 'react';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
// import ListData from './List';
import ReadJson from './ReadJson';

function App() {
  const [data, setData] = useState({ hits: [] });

  // useEffect(async () => {
  //   const result = await axios(
  //     'https://hn.algolia.com/api/v1/search?query=redux',
      
  //   );
  //   setData(result.data);
  // }, []);


  var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

  return (
    <div>
      <h1>Package listings</h1>
      {/* <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul> */}
      <ReadJson />
      
      
      {/* <p>{obj.name}{obj.age}</p> */}
      
    </div>

  );
}

export default App;
