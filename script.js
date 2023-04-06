let breed = document.getElementById('first').value;
let dog = document.getElementById('dog');
let img = document.createElement('div');
let main = document.querySelector('body');
    
dog.addEventListener('click', () => {
        breed = dog.value;
        getData(breed);
});
   
setInterval(() => {
    getData(breed)}, 5000)
   
const getData = breed => {	
   
    let newRequest = new XMLHttpRequest();
    newRequest.open('GET',"https://dog.ceo/api/breed/" + breed + "/images/random");
    newRequest.onload = function(){
        let data = JSON.parse(newRequest.responseText).message;
        displayData(data);
    };
       
    newRequest.send();
};
   
const displayData = data => {
    main.appendChild(img);
    var pic = '<img src ="' + data + '"/>';
    img.innerHTML = pic;
};
getData(breed);


