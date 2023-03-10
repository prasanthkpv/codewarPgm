function generateHashtag (str) {
    str = str.trim();
    if(!str){return false }
    let strArry = str.split(" ");
    str = strArry.map(element =>{ 
        element = element.trim(); 
        if(element){
            return element[0].toUpperCase()+element.slice(1)
        }
    }); 
    if((str.join('')).length > 139){
        return false
    }
    return "#"+ str.join('');
}

const result  = generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
console.log(result);