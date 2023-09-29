const btn= document.querySelector(".launch");
const category= document.querySelector(".category h1");
const content= document.querySelector(".content h1");

btn.addEventListener("click",()=>{
    fetch("Adhkar.json")
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        let index=Math.floor(Math.random()*data.length);
        let element=document.querySelector('.category h1');
        element.style.fontFamily = "'Pointart Sans-Serif Bold', sans-serif";
        category.innerHTML=data[index].category;
        index2=Math.floor(Math.random()*data[index].array.length);
        let element2=document.querySelector('.content h1');
        element2.style.fontFamily = "'Pointart Sans-Serif Bold', sans-serif";
        content.innerHTML=data[index].array[index2].text;
      });
});

