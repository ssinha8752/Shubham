const text=['Full-Stack Developer', 'Computer Science Graduate','Sports Enthusiast','Travel Freak','Foodie'];
let count = 0;
let currentText = '';
let letter = '';
let index = 0;

(function type(){
    if(count === text.length){
        count=0;
    }
    currentText=text[count];
    letter=currentText.slice(0,++index)
    
    document.querySelector('.typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }
    setTimeout(type, 400)
}())