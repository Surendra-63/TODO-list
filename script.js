const addinput = document.getElementById('Store-item');
const  displayItems = document.getElementById('display-item');
const element = document.getElementById('display');
const clearallItems=document.getElementById('clearall');
addinput.addEventListener("click",()=>{
   const value=displayItems.value;
   const list= document.createElement('li');
    list.innerText=value;
    const delButton =document.createElement('button');
      delButton.innerText ="X";
        delButton.addEventListener("click",()=>{
        list.remove();
        })
    
     list.appendChild(delButton)
  const appendlist= element.appendChild(list) 
      displayItems.value="";
})
clearallItems.addEventListener("click", () => {
    element.innerHTML = "";
});