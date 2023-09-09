document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const weaponName = document.querySelector('input').value
    try{
        const response = await fetch(`localhost:3000/api/${weaponName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }catch(error){
        console.log(error)
    }
}