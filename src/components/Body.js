import React from 'react';
import '../css/body.css'
import pic from '../images/bg.png'


 const Body = ()=>{
    return(
        <div class="bodyContainer" style={{height:"800px"}} >
            <img style={{height:"800px"}} src={pic} />
            <div class="centered">
               
                   </div>
                   <div class="centeredOpacity">
                   <h1 class="titleSub">Introducing Katarina </h1>
                   
<div class="text-about" style={{width: "50%"}}>-2013-2017 graduated as a graphic designer at the high school "School of Design" in Belgrade </div>
<div class="text-about" style={{width: "50%"}}>-Rewarded as the 'best and most successful graphic design student'</div>
<div class="text-about" style={{width: "50%"}}>-Was a part of the 'Cyrillic typography' school exhibition</div>
<div class="text-about" style={{width: "50%"}}>-Volunteered at DIMIS company as a graphic designer </div>
<div class="text-about" style={{width: "50%"}}> -2017 started attending the "Academy of Modern arts" in Belgrade, as a graphic designer`</div>

                       
                   </div>
      
    </div>
    )
}

export default Body;