const input=document.getElementById('search');
const emojeeContainer=document.getElementById('emojeeContainer');
input.addEventListener('keyup',function(){
    let inputValue=input.value;
    let emojiListCopy=[...emojiList];
    emojiListCopy=emojiListCopy.filter((data1)=>{
        return data1.description.toLowerCase().includes(inputValue.toLowerCase());
    })
    let html=``;
    for(let i=0;i<emojiListCopy.length;i++){
        html += ` <div class="emojeeList">
        <p class="emojee">${emojiListCopy[i].emoji}</p>
        <p class="name">${emojiListCopy[i].description}</p>
        <p class="description">${emojiListCopy[i].aliases[0]}</p>
        <hr>
    </div>`
    }
    emojeeContainer.innerHTML=html;
})