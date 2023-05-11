const breedidEl = document.querySelector('#breedType'); 
const petNameEl = document.querySelector('#name');
//const adoptdate = document.querySelector('#adoptdate').value;
const adopt = document.getElementById('adoptdate');
const picUrlEl =document.querySelector('#picUrl');
const addPetEl = document.querySelector('#addPet');

const signupPet= async (event) => 
{
    event.preventDefault();
    const name = petNameEl.value.trim();
    const typeid = 1;
    const breedid = breedidEl.value;
    const adoptdate = adopt.value;
    const picUrl = picUrlEl.value.trim();
    console.log(name, typeid, breedid, adoptdate, picUrl)


    
if(name && adoptdate){
      const response = await fetch('api/animals/animal', {
       // const response = await fetch('/api/users', {
          method:'POST',
          body: JSON.stringify({name, typeid, breedid, adoptdate, picUrl}),
          headers: { 'Content-Type': 'application/json'},
        });
        
        if (response.ok) {
          console.logdocument.location.replace('/');
         
        } else {
          alert(response.statusText," Failed to add pet");
        }
      }}
    


addPetEl.addEventListener("click", signupPet);