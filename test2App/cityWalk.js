function isValidWalk(walk) {
    //insert brilliant code here
    let length = walk.length;
    let dirArray = ['n', 's', 'w', 'e'];
    if(length === 10){
        let dirCount = [];
        dirArray.forEach(element => {
            let counter = 0;
            for (let dir of walk) {
                if (dir == element) {
                    counter++;
                }
            }
            dirCount.push(counter);
        });
        console.log(dirCount);
        if((dirCount[0]=== dirCount[1]) && (dirCount[2]=== dirCount[3]))
            { return true  }
        else return false
    }
    else return false;
  }

  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));