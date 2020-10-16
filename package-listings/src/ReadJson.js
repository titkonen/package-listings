import React, { useState } from 'react';
import { sampledata } from './test.json';

function ReadJson() {
   const [packageList, setPackageList] = useState(sampledata);

   // console.log(sampledata);

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
         
      });
      setPackageList(sorted);
      console.log(sorted);
      // alert(sorted[a - b].name);
   };

      return ( 
         <div>
            <button onClick={sortByName}>Sort in alphabetical order</button>
             <ul>
               {packageList.map(({ name, description, id, url, url2 }) => (
                  <li key={id}>
                     <b><a href={name}>{name} </a></b>
                     {/* <i>{Description}</i> */}
                     {/* <a href={url}>{url} </a>
                     <a href={url2}>{url2} </a> */}
                  </li>

               ))}
            </ul>
         </div>
         

      );
}

export default ReadJson;
