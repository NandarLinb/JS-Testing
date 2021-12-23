
    
    var min=00;
    var second=00;
   
    var appendmin=document.getElementById("min");
    var appendsec=document.getElementById("sec");
   
    var interval;

    function start(){
        
        Interval=setInterval(starter,10);
    }
    function stop(){
        clearInterval(Interval);
    }
    
    function reset(){
        clearInterval(Interval);
       
        min="00";
        second="00";
       
        appendmin.innerHTML=min;
        appendsec.innerHTML=second;

    }
  function starter(){
      second++;
      if (second<=9){
          appendsec.innerHTML="0"+ second;
      }
      if(second>9){
          appendsec.innerHTML=second;
      }
      if(second>99){
          console.log("min");
          min++;
          appendmin.innerHTML="0"+min;
          second= "0";
          appendsec.innerHTML="0"+ second ;
      }
      if(min>9){
          appendmin.innerHTML=min;
      }
     
  }