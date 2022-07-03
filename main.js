const API_BASIC="https://my-json-server.typicode.com/Jeck99/fake-server/devices"
async function getApi(){
    try {
        return await fetch(`${API_BASIC}`).then(res => res.json())   
    }
    catch (error) {
        
    }
    finally{}
}
async function printToConsole(){
    let devices = await getApi()
    devices.forEach(device => {
        console.log(device)
        
    });
}
async function printToscreen(){
    let devices = await getApi()
    devices.forEach(device => {
        cardTemplate(device)
        
    });
}

printToscreen()


function cardTemplate(device){
    
    document.getElementById("phones_cards").innerHTML+=`
    <div class="card">
    <img src="${device.picture}" style="width:100%;">
    <h5>brand : ${device.brand}</h5>
    <p>isAvailable : ${device.isAvailable}</p>
    <p>createdAt : ${device.createdAt}</p>
    <p>color : ${device.color}</p>
    <p>price : ${device.price}</p>
    <p>ram : ${device.ram}</p>
  
    </div>
    `
}

    


    



// const API_BASIC="https://my-json-server.typicode.com/Jeck99/fake-server/devices"
// async function getApi(){
//     try {
//         return await fetch(`${API_BASIC}`).then(res => res.json())   
//     }
//     catch (error) {
        
//     }
//     finally{}
// }
// function printToConsole(){
//     getApi()
//     .then(result =>{
//         console.log(result)
           
//     })
// }

// printToConsole()


// async function printToSidebar(){
//     let result = await getApi()
//     result.forEach(element => {
        
//         sidebar.innerHTML=`<h1>${element.color}</h1>`
//     });
// }

// setInterval(printToSidebar,2000);



// // printToSidebar()