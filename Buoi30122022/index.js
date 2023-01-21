const handleForm= (event) =>{
    event.preventDefault();
    //console.log(event);
    const name = document.querySelector("#introduce-form #name").value;
    const age = document.querySelector("#introduce-form #age").value;
    const uniClass= document.querySelector("#introduce-form #uniClass").value;
    console.log({name,age,uniClass});
    setInfo({name, age, uniClass});
}

const setInfo = ({name, age, uniClass}) =>{
    const nameTag=document.querySelector('#name-info');
    const ageTag=document.querySelector('#age-info');
    const uniClassTag=document.querySelector('#uniClass-info');

    nameTag.innerText= name;
    ageTag.innerText= age;
    uniClassTag.innerText= uniClass;
}

document.querySelector("#introduce-form").addEventListener(
     "submit",
      (handleForm)
)