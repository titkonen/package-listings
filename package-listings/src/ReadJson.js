import React, { useState } from 'react';
import { sampledata } from './sample.json';

// Reads sample data from JSON file
function ReadJson() {
   const [packageList, setPackageList] = useState(sampledata);
   console.log(sampledata); 

   // Sorting list in alphabetical order
   const sortByName = () => {
      const sorted = [...packageList].sort((a, b) => {
         var nameA = a.name.toUpperCase();
         var nameB = b.name.toUpperCase();
         if (nameA < nameB) {
            return -1;
         }
         if (nameA > nameB) {
            return 1;
         }
         return 0;  
      });
      setPackageList(sorted);
   };
      return ( 
         <div>
            <button onClick={sortByName}>Sort in alphabetical order</button>
             <ul> 
               {packageList.map(({ name, description, id, url, url2 }) => (
                  <li key={id}>
                     <b><a href={name}>{name} </a></b><br></br>
                     <i>{description}</i> <br></br>
                     <a href={url}>{url} </a><br></br>
                     <a href={url2}>{url2} </a><br></br>
                     <br></br>
                  </li>
               ))}
            </ul>
         </div>
      );
}

export default ReadJson;