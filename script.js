


var color = $(".hour");

var des = $(".description");



for (let i = 0; i < color.length; i++) {

    var retrieve = localStorage.getItem(i);
    $(des[i].children[0]).val(retrieve);
    
        
    var h = color[i].children[0].textContent;
    var firstNumber = h.split(':');
    h = firstNumber[0];
    

    var t = moment().format("HH:mm");  
    secondNumber = t.split(':');
    t = secondNumber[0];
    
    
    
     if (h > t)
    {
        $(des[i]).attr("class", "col description future");
        
    }
    else if (h < t)
    {
        $(des[i]).attr("class", "col description past" );
        
    }
    else
    {
        $(des[i]).attr("class", "col description present" );
        
    }
    
}




//Adding the current date and time in the header

setInterval(function(){ 
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')); 

    

}, 1000);

//Create event listeners for the save buttons

var save = $(".saveBtn");
save.click(function(event){
    console.log(event);
    console.log(this);
    for (let i = 0; i < save.length; i++) {
        if (this === save[i])
        {
            console.log("match");
            localStorage.setItem(i, des[i].children[0].value);
        }
    }
    

  });

  

