function convertQueryToMap(query) {
  // add your code here
  let queryArray = query.split("&");
  console.log(queryArray);
  let jsonObject = {};
  queryArray.forEach((element) => {
    let elementArray = element.split("=");
    let keys = elementArray[0];
    let value = elementArray[1];
    let keyArray = keys.split(".");
    let jsonCheck = JSON.stringify(jsonObject);
    console.log(keys, value, keyArray, jsonCheck)
    keyArray.forEach((key,index) => {
      console.log(JSON.parse(jsonCheck), Object.keys(JSON.parse(jsonCheck)), Object.keys(JSON.parse(jsonCheck)).includes(key), key);
      if (Object.keys(JSON.parse(jsonCheck)).includes(key)) {
        let jsonCheck = jsonCheck[key];
      }
      else{
        if(index === keyArray.length -1){
            jsonCheck[key] = value;
        }
        else{
            jsonObject[key] = {};
        }
      }
    });
    // let json = JSON.parse(jsonCheck);
    // json.key = value;
  });
}

let q =
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
console.log(convertQueryToMap(q));
