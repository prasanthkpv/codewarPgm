function chooseBestSum(t, k, ls) {
    console.log(t, k, ls)
    let sumArray = [t];
    let N = ls.length;
    let sum = 0;
    if( N === 1 || N === 2)
    {
        return null;
    }
    
   switch(k){
    case 0: return null;
    case 1:
        for(let firstIndex = 0;firstIndex< N; firstIndex++){
            let sum =  ls[firstIndex];
            if( sum === t){
                return t;
            }
            sumArray.push(ls[firstIndex]);
        }
        break;
    case 2:
        for(let firstIndex = 0;firstIndex< N-1; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N; secondIndx++){
                fMemebr  = ls[firstIndex];
                sMember = ls[secondIndx];
                let sum = fMemebr + sMember
                if( sum === t){
                    return t;
                }
                sumArray.push(sum);  
            }
        }
        break;
    case 3:
        for(let firstIndex = 0;firstIndex< N-2; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-1; secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N; thirdIndx++){   
                        fMemebr  = ls[firstIndex];
                        sMember = ls[secondIndx];
                        tMember = ls[thirdIndx];
                        let sum = fMemebr + sMember + tMember;
                        if( sum === t){
                            return t;
                        }
                        sumArray.push(sum);   
                    }
                }
            }
            break;
    case 4:
        for(let firstIndex = 0;firstIndex< N-3; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-2; secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -1; thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N; fourthIndex++){
                        fMemebr  = ls[firstIndex];
                        sMember = ls[secondIndx];
                        tMember = ls[thirdIndx];
                        foMemebr = ls[fourthIndex];
                        let sum = fMemebr + sMember + tMember + foMemebr;  
                        if( sum === t){
                            return t;
                        }
                        sumArray.push(sum); 
                        
                    }
                }
            }
        }
        break;
    case 5:
        for(let firstIndex = 0;firstIndex< N-4; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-3; secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N - 2; thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N - 1; fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N; fifthIndex++){
                            fMemebr  = ls[firstIndex];
                            sMember = ls[secondIndx];
                            tMember = ls[thirdIndx];
                            foMemebr = ls[fourthIndex];
                            fiMemebr = ls[fifthIndex];
                            let sum = fMemebr + sMember + tMember + foMemebr + fiMemebr;
        
                            if( sum === t){
                                return t;
                            }
                            sumArray.push(sum);   
                    }
                }
            }
        }
    }
    break;
    case 6:
        for(let firstIndex = 0;firstIndex< N-5; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-4; secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N - 3; thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N - 2; fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-1; fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N; sixthIndex++){
                                fMemebr  = ls[firstIndex];
                                sMember = ls[secondIndx];
                                tMember = ls[thirdIndx];
                                foMemebr = ls[fourthIndex];
                                fiMemebr = ls[fifthIndex];
                                siMemebr = ls[sixthIndex];
                                let sum = fMemebr + sMember + tMember + foMemebr+fiMemebr+siMemebr;
            
                                if( sum === t){
                                    return t;
                                }
                                sumArray.push(sum);   
                        }
                    }
                }
            }
        }   
    }   
    break;
    case 7:
        for(let firstIndex = 0;firstIndex< N-6; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-5; secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N - 4; thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N - 3; fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-2; fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-1; sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N; seventhIndex++){
                                    fMemebr  = ls[firstIndex];
                                    sMember = ls[secondIndx];
                                    tMember = ls[thirdIndx];
                                    foMemebr = ls[fourthIndex];
                                    fiMemebr = ls[fifthIndex];
                                    siMemebr = ls[sixthIndex];
                                    sevenMember = ls[seventhIndex];
                                    let sum = fMemebr + sMember + tMember + foMemebr+fiMemebr+siMemebr+sevenMember;
                                    if( sum === t){
                                        return t;
                                    }
                                    sumArray.push(sum);   
                            }
                        }
                    }
                }
            }   
        }  
    } 
    break;
    case 8:
        for(let firstIndex = 0;firstIndex< N-7; firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-6; secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N - 5; thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N - 4; fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-3; fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-2; sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-1; seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N; eightIndex++){
                                        fMemebr  = ls[firstIndex];
                                        sMember = ls[secondIndx];
                                        tMember = ls[thirdIndx];
                                        foMemebr = ls[fourthIndex];
                                        fiMemebr = ls[fifthIndex];
                                        siMemebr = ls[sixthIndex];
                                        sevenMember = ls[seventhIndex];
                                        eightMember = ls[eightIndex];
                                        let sum = fMemebr + sMember + tMember + foMemebr+fiMemebr+siMemebr+sevenMember+eightMember;
                                        if( sum === t){
                                            return t;
                                        }
                                        sumArray.push(sum);   
                                }
                            }
                        }
                    }
                }   
            }  
        } 
    }
    break;
    case 9:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                        let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                        ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex];
                                        if( sum === t){
                                            return t;
                                        }
                                        sumArray.push(sum);   
                                    }
                                }
                            }
                        }
                    }   
                }  
            } 
        }
    }    
    break;
    case 10:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                + ls[TenIndex];
                                                if( sum === t){
                                                    return t;
                                                }
                                                sumArray.push(sum);   
                                        }
                                    }
                                }
                            }
                        }   
                    }  
                } 
            }
        }    
    }
    break;
    case 11:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                    ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                    + ls[TenIndex] + ls[elevenIndex];
                                                    if( sum === t){
                                                        return t;
                                                    }
                                                    sumArray.push(sum);   
                                            }
                                        }
                                    }
                                }
                            }   
                        }  
                    } 
                }
            }    
        }
    }
    break;
    case 12:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                    let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                    ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                    + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex];
                                                    if( sum === t){
                                                        return t;
                                                    }
                                                        sumArray.push(sum);   
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
    break;
    case 13:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                    let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                    ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                    + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen];
                                                    if( sum === t){
                                                        return t;
                                                    }
                                                    sumArray.push(sum);   
                                                    }
                                                }
                                            }
                                        }
                                    }   
                                }  
                            } 
                        }
                    }    
                }
            }
        }
    }
    break;
    case 14:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen];
                                                                if( sum === t){
                                                                    return t;
                                                                }
                                                                sumArray.push(sum);   
                                                            }
                                                    }
                                                }
                                            }
                                        }
                                    }   
                                }  
                            } 
                        }
                    }    
                }
            }
        }
    }
    break;
    case 15:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                for(let fifteen = fourteen+1; fifteen < N-(k-15); fifteen++){
                                                                    let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                    ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                    + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen] 
                                                                    + ls[fifteen];
                                                                    if( sum === t){
                                                                        return t;
                                                                    }
                                                                    sumArray.push(sum);   
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
break
case 16:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                for(let fifteen = fourteen+1; fifteen < N-(k-15); fifteen++){
                                                                    for(let sixteen = fifteen+1; sixteen < N-(k-16); sixteen++){
                                                                    let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                    ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                    + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen] 
                                                                    + ls[fifteen] + ls[sixteen];
                                                                    if( sum === t){
                                                                        return t;
                                                                    }
                                                                    sumArray.push(sum);   
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
break
case 17:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                for(let fifteen = fourteen+1; fifteen < N-(k-15); fifteen++){
                                                                    for(let sixteen = fifteen+1; sixteen < N-(k-16); sixteen++){
                                                                        for(let seventeen = sixteen+1; seventeen < N-(k-17); seventeen++){
                                                                            let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                            ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                            + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen] 
                                                                            + ls[fifteen] + ls[sixteen]+ls[seventeen];
                                                                            if( sum === t){
                                                                                return t;
                                                                            }
                                                                            sumArray.push(sum); 
                                                                        }  
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
break
case 18:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                for(let fifteen = fourteen+1; fifteen < N-(k-15); fifteen++){
                                                                    for(let sixteen = fifteen+1; sixteen < N-(k-16); sixteen++){
                                                                        for(let seventeen = sixteen+1; seventeen < N-(k-17); seventeen++){
                                                                            for(let eighteen = seventeen+1; eighteen < N-(k-18); eighteen++){
                                                                                let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                                ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                                + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen] 
                                                                                + ls[fifteen] + ls[sixteen]+ls[seventeen] + ls[eighteen];
                                                                                if( sum === t){
                                                                                    return t;
                                                                                }
                                                                                sumArray.push(sum); 
                                                                            }
                                                                        }  
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
break;
case 19:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                for(let fifteen = fourteen+1; fifteen < N-(k-15); fifteen++){
                                                                    for(let sixteen = fifteen+1; sixteen < N-(k-16); sixteen++){
                                                                        for(let seventeen = sixteen+1; seventeen < N-(k-17); seventeen++){
                                                                            for(let eighteen = seventeen+1; eighteen < N-(k-18); eighteen++){
                                                                                for(let nineteen = eighteen+1; nineteen < N-(k-19); nineteen++){
                                                                                    let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                                    ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                                    + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen] 
                                                                                    + ls[fifteen] + ls[sixteen]+ls[seventeen] + ls[eighteen] + ls[nineteen];
                                                                                    if( sum === t){
                                                                                        return t;
                                                                                    }
                                                                                    sumArray.push(sum); 
                                                                                }
                                                                            }
                                                                        }  
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
break;
case 20:
        for(let firstIndex = 0;firstIndex< N-(k-1); firstIndex++){
            for(let secondIndx = firstIndex + 1; secondIndx < N-(k-2); secondIndx++){
                for (let thirdIndx = secondIndx +1; thirdIndx < N -(k-3); thirdIndx++){
                    for(let fourthIndex = thirdIndx+1; fourthIndex < N -(k-4); fourthIndex++){
                        for(let fifthIndex = fourthIndex+1; fifthIndex < N-(k-5); fifthIndex++){
                            for(let sixthIndex = fifthIndex+1; sixthIndex < N-(k-6); sixthIndex++){
                                for(let seventhIndex = sixthIndex+1; seventhIndex < N-(k-7); seventhIndex++){
                                    for(let eightIndex = seventhIndex+1; eightIndex < N-(k-8); eightIndex++){
                                        for(let nineIndex = eightIndex+1; nineIndex < N-(k-9); nineIndex++){
                                            for(let TenIndex = nineIndex+1; TenIndex < N-(k-10); TenIndex++){
                                                for(let elevenIndex = TenIndex+1; elevenIndex < N-(k-11); elevenIndex++){
                                                    for(let twelveIndex = elevenIndex+1; twelveIndex < N-(k-12); twelveIndex++){
                                                        for(let thirteen = twelveIndex+1; thirteen < N-(k-13); thirteen++){
                                                            for(let fourteen = thirteen+1; fourteen < N-(k-14); fourteen++){
                                                                for(let fifteen = fourteen+1; fifteen < N-(k-15); fifteen++){
                                                                    for(let sixteen = fifteen+1; sixteen < N-(k-16); sixteen++){
                                                                        for(let seventeen = sixteen+1; seventeen < N-(k-17); seventeen++){
                                                                            for(let eighteen = seventeen+1; eighteen < N-(k-18); eighteen++){
                                                                                for(let nineteen = eighteen+1; nineteen < N-(k-19); nineteen++){
                                                                                    for(let twenty = nineteen+1; twenty < N-(k-20); twenty++){
                                                                                        let sum = ls[firstIndex] + ls[secondIndx] + ls[thirdIndx] + ls[fourthIndex] +
                                                                                        ls[fifthIndex]+ls[sixthIndex]+ls[seventhIndex]+ls[eightIndex]+ls[nineIndex]
                                                                                        + ls[TenIndex] + ls[elevenIndex] + ls[twelveIndex] + ls[thirteen] + ls[fourteen] 
                                                                                        + ls[fifteen] + ls[sixteen]+ls[seventeen] + ls[eighteen] + ls[nineteen] +  ls[twenty];
                                                                                        if( sum === t){
                                                                                            return t;
                                                                                        }
                                                                                        sumArray.push(sum); 
                                                                                    }
                                                                                }
                                                                            }
                                                                        }  
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }   
                            }  
                        } 
                    }
                }    
            }
        }
    }
break;
}
    sumArray = sumArray.sort((a, b) => a-b)
    let index = sumArray.indexOf(t);
    console.log(index, sumArray);
    if(!index){
        return null;
    }
    return sumArray[index-1];
}

var ts = [91, 74, 73, 85,73, 81, 87]
console.log(chooseBestSum(1700, 15, [91, 74, 73, 85,73, 81, 87, 55, 69, 70, 88, 93, 96, 100, 33, 48, 68, 69]))

// [91, 74, 73, 85,73, 81] = 477
// [91, 74, 73, 85,73, 87] = 483
// [74, 73, 85,73, 81, 87] = 473
