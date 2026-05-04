//your JS code here. If required.
//grabbing elemnents 
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn =  document.getElementById("btn");

//adding the event listener so this ensures to run the code exactly when user clicks the button 
btn.addEventListener("click", function(event){
    event.preventDefault(); //stops the page form relaoding which is to stop from refreshing or else the user will loose all the ddails if it gets refreshed 


    const age= ageInput.value ;
    const name= nameInput.value ;

    if(age=== "" || name === ""){
        alert("Please enter valid details");
        return; // this will stop here and doesnot move forward the program
    }
    const votingPromise = new Promise((resolve,reject)=> {
        setTimeout(() => {
            if (age>18){
                resolve(name); //passes the name to .then()
            }else {
                reject(name); //passes the name to .catch()
            }
        }, 4000 );

    });

    votingPromise
    .then((name)=> {
        alert("Welcome, " + name + ". You can vote.");

    })
    .catch((name)=>{
        alert("Oh sorry " + name + ". You aren't old enough.");
    });
});