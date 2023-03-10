function rot13(message){
    let letterArray = [...'abcdefghijklmnopqrstuvwxyz'];
    let decondedArray = [];
    let str = message.toLowerCase();
    if(!message){
        return '';
    }
    for (let index = 0; index < [...str].length; index++) {
        let element = [...str][index];
        let N = letterArray.indexOf(element);
        if(N === -1){
            decondedArray.push(element)
            continue
        }
        nextN = (N + 13) % 26;
        let decodeLetter;
        if(message[index] === letterArray[N].toUpperCase())
            decodeLetter = letterArray[nextN].toUpperCase();
        else decodeLetter = letterArray[nextN];
        decondedArray.push(decodeLetter);
    }
    return decondedArray.join('');
  }

  const result = rot13('');
  console.log(result);