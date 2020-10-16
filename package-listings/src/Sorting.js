import React, { useState } from "react";
//import ReactDOM from "react-dom";

const koirat = [
   
   
   { name: "BBB", age: 22 },
   { name: "AAA", age: 50 },
   { name: "DDD", age: 44 }, 
   { name: "CCC", age: 11 },
   
];

function Sorting() {
  const [dogList, setDogList] = useState(koirat);

  const sortByAge = () => {
    const sorted = [...dogList].sort((a, b) => {
      return a.age - b.age;
    });
    setDogList(sorted);
   //  alert(sorted[0].name);
  };

  return (
    <div>
       <h3>Sorting names</h3>
       <button onClick={sortByAge}>sort by age</button>
      {dogList.map((dog, i) => {
        return <p key={i}>{dog.name}</p>;
      })}
      
    </div>
  );
}

export default Sorting;