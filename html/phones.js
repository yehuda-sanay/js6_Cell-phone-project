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

printToConsole()

function cardTemplate(){
    return

`<div class="card">
    `
}