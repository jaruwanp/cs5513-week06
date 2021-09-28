// library for "resources" firestore collection

// import firebase lib, returns firestore db in firebase var
import firebase from "./firebase";

// returns all valid IDs for getStaticPaths()
export async function getResourceIds() {
  let output = [];
  // wrap try around our code to catch any errors that happen
  try {
    // retrieve ALL documents from firestore collection named "resources"
    const snapshot = await firebase.collection("persons").get();
    
    // loop thru and build out an array of all data from firestore collection documents
    snapshot.forEach(
      (doc) => {
        // console.log(doc.id, '=>', doc.data() )
        output.push(
          {
            params: {
              id:doc.id.toString()
             //  id: item.id.toString()
            }
          }
        );
      }
    );

    
  } catch(error) {
    console.error(error);
  }
  // console.log(output);
  return output;
}

export async function getSortedList2() {
  
    // wrap try around our code to catch any errors that happen
  try {
    // retrieve ALL documents from our firestore collection named "resources"
    const snapshot = await firebase.collection("persons").get();
    
    // loop thru and build out an array of all data from firestore collection documents
    let output = [];
    snapshot.forEach(
      (doc) => {
        // console.log(doc.id, '=>', doc.data() )
        output.push( { id:doc.id, data:doc.data().name } );
        
      }
    );
    console.log(output);
   return output;
    // return OK http code and JSON object with all firestore data
    ;
  } catch(error) {
    console.error(error);
     

  }

}



export async function getSortedList() {
  let output = [];
  // wrap try around our code to catch any errors that happen
  try {
    // retrieve ALL documents from firestore collection named "resources"
      const snapshot = await firebase.collection("persons").get();
    
    // loop thru and build out an array of all data from firestore collection documents
    snapshot.forEach(
      (doc) => {
        
        output.push(
          {
              id: doc.id.toString(),
              name: doc.data().name
          }
        );
       
      }
    );

    
  } catch(error) {
    console.error("error00:"+ error);

  }
  

  output.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  });

console.log("------");
  console.log(output);
  

 return output;
}


// returns one document's data for matching ID
export async function getResourceData(idRequested) {
  // retrieve ONE document matched by unique id
  const doc = await firebase.collection("persons").doc(idRequested).get();

  // return all data from firestore document as json
  let output;
  if (!doc.empty) {
    output = { id:doc.id.toString(), data:doc.data() };
    // now you can do any data validation you want to conduct
    
  } else {
    output = null;
  }

  return output;
}