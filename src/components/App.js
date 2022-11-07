import React, { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { preStoredNames} from './data';
import { Header } from './Header/Header';
import { AddNewMembers } from './AddNewMembers';
import { MemberList } from './MemberList';
import { PickerButton } from './PickerButton';
import { Footer } from './Footer/Footer';

function App(){
  const [names, setNames] = useState(preStoredNames);
  const [pickedName, setPickedName] = useState("");

  // addMember add name to the list
  function addMember(newMemberName){
    if(newMemberName.trim()  !== ""){
      setNames([{ id: uuidv4(), memberName: newMemberName }, ...names]);
    setPickedName("");
    }else{
      alert("Field can not be empty")
    }
  }
// deleteName removes name from the list
  function deleteName(id) {
    setNames(names.filter(name => name.id !== id));
  }

  // pickName is use to execute the randomizerAI function
  function pickName() {
    function randomizerAI(){
        if (names.length !== 0) {
          const randomName = names[Math.floor(Math.random() * names.length)];
          let filteredNames = names;
          const exist = randomName.memberName.toUpperCase() === pickedName.toUpperCase()
          if (exist) {
            filteredNames = names.filter(name => name.memberName !== randomName.memberName);
            randomizerAI();
          } else {
            setPickedName(randomName.memberName);
          }
        } else {
         setPickedName("");
         alert("\"The same name should not be picked twice in a row\" Invalid State!");
      }
    }

    randomizerAI();

  }

  // useEffect(
  //   ()=>{
  //      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(names)) ;
  //   }, [names]);
  
  

// jsx section output to the User Interface (UI)
  return (
    <div>
      <div className="container">
        <div className="app mt-5 mb-4">
          <Header />
          <main>
            <div className="app_list">
              <AddNewMembers addMember={addMember} />
              <MemberList names={names} deleteName={deleteName} />
            </div>
            {names.length !== 0 && (
              <PickerButton pickName={pickName} pickedName={pickedName} />)
            }
            <Footer />
          </main>
        </div>
      </div>
  
    </div>
  )
}
export default App;
