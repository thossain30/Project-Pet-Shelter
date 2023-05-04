const breedid = document.querySelector('#breedType').value; 
const petNameEl = document.querySelector('#name');
const adoptdate = document.querySelector('#adoptdate').value;
const picUrlEl =document.querySelector('#picUrl');
const addPetEl = document.querySelector('#addPet');

const signupPet= async (event) => 
{
    event.preventDefault();
    const name = petNameEl.value.trim();

    

    const picUrl = picUrlEl.value.trim();


    const typeid = 1
    

      const response = await fetch('api/animals/animal', {
       // const response = await fetch('/api/users', {
          method:'POST',
          body: JSON.stringify({  name, typeid, breedid, adoptdate, picUrl }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('RESPONSE:',response)
        if (response.ok) {
          console.log("****************RESPONSE IS OK 1****************")
         
        } else {
          alert(response.statusText," Failed to add pet");
        }
      }
    


addPetEl.addEventListener("click", signupPet);