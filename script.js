//add event handler to book now button 
document.getElementById("bookNow").addEventListener("click",function(){
    const firstClassCount = getInputValue("firstClass");
    const economyClassCount = getInputValue("economyClass");
    if(firstClassCount <= 0 && economyClassCount <= 0){
        alert("Select at least One Ticket");
    }else if(firstClassCount > 0 || economyClassCount > 0){       
        const bookingArea = document.getElementById("bookingForm-area");
        bookingArea.style.display = "none";
        const successText = document.getElementById("success-text");
        successText.style.display = "block";
        document.getElementById("bookNow").style.display = "none";
    } 
})


// handleTicketCount function
function handleTicketCount(ticket,isIncrease){
  const ticketInput =  document.getElementById(ticket+"-count");
  const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }else if(isIncrease ==false && ticketCount>0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount; 
    calculateTotal();
}


// calculation function
function calculateTotal(){
     const firstClassCount = getInputValue("firstClass");
    const economyClassCount = getInputValue("economyClass")
    const subTotal = firstClassCount*150 + economyClassCount*100;
    document.getElementById("subTotal").innerText = subTotal;
    const vat = Math.round(subTotal*0.1);
    document.getElementById("vat-amount").innerText = vat;
    const totalAmount = subTotal + vat;
    document.getElementById("total-amount").innerText = totalAmount;
}


function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket+"-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


// add event handler to increase button of first class ticket
document.getElementById("firstClass-increase").addEventListener("click",function(){ 
    handleTicketCount("firstClass",true)
})


//add event handler to decrease button of first class ticket
document.getElementById("firstClass-decrease").addEventListener("click",function(){  
    handleTicketCount("firstClass",false)
})


// add event handler to increase button of economy ticket
document.getElementById("economyClass-increase").addEventListener("click",function(){   
    handleTicketCount("economyClass",true)
})


//add event handler to decrease button of economy ticket
document.getElementById("economyClass-decrease").addEventListener("click",function(){  
    handleTicketCount("economyClass",false)
})


// successText style 
const successText = document.getElementById("success-text");
successText.style.display = "none";
