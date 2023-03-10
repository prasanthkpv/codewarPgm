function humanReadable (seconds) {
    let hours = 0;
    let minutes = 0;
    let second = 0;
    if(seconds % 60){
        second += parseInt(seconds % 60);
    }
    minutes += Math.floor(seconds / 60);
    if(minutes <= 59){
        return [hours,minutes,second]
        .map(v => v < 10 ? "0" + v : v)
        .join(":")
        .toString();
    }
    else{
        hours += Math.floor(minutes / 60);
        minutes = parseInt(minutes % 60);
        }  
    if(hours <= 99){
        return [hours,minutes,second]
        .map(v => v < 10 ? "0" + v : v)
        .join(":")
        .toString();
        }
        else{
            hours += parseInt(hours % 100);
        }
     return [hours,minutes,second]
     .map(v => v < 10 ? "0" + v : v)
     .join(":")
     .toString();
    }


  const result = humanReadable(369999);
  console.log(result);