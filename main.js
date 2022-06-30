const API_BASIC="https://my-json-server.typicode.com/Jeck99/fake-server/devices"
async function printSidebar(){
    try {
        return await fetch(`${API_BASIC}`)
        .then(res => res.json())   
    }
    catch (error) {
        
    }
    finally{}
}
function som(){
    printSidebar()
    .then(result =>{
        console.log(result)
    })
}
som()