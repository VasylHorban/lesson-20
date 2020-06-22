document.querySelector('#save').addEventListener('click', ()=>{
    let user = new User();
    user.setName(document.querySelector('#name').value);
    user.setAge(document.querySelector('#age').value);
    if(!user.isCorrect()){
        alert('Please, fill the form correctly!');
        document.querySelector('#name').value = '';
        document.querySelector('#age').value = '';
        return false;
    }
    saveToLocalStorage(user);
    saveToCookie('user' , user, 7);
})

function saveToLocalStorage(obj){
    localStorage.setItem('user', JSON.stringify(obj))
}

function saveToCookie(name, obj, daysToLive){
    let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(JSON.stringify(obj));
    if(!isNaN(daysToLive)){
      cookieString += ';max-age=' + (daysToLive*60*60*24);
    }
    document.cookie = cookieString;    
}

class User{
    constructor(){}
    setName(name){
        this.name = name.trim().toLowerCase();
    }
    setAge(age){
        this.age = +age.trim();
    }
    isCorrect(){
        if(this.name != ''&& this.age != ''&& !isNaN(this.age)){
            return true
        }
        return false;
    }
}
