import React, { useEffect } from 'react';

import MealsList from './Components/Meals/MealsList';
import {db} from '../src/Firebase/firebase'

export default function App() {
  

  useEffect(() => {
    console.log('loaded')

    db.collection("tests")
    .doc("Rabat")
    .set(
      {
        name: "RABAT",
        state: "RBA",
        country: "MAR"
      }
    )
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });


    db.collection("tests")
    .get()
    .then((result) => {
      const data = result.docs.map(doc => doc.data());
      console.log(data); // array of cities objects
      console.log("All documents successfully readed!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    })

  }, []);

  return (
    <div>
      <MealsList />
    </div>
  );
}