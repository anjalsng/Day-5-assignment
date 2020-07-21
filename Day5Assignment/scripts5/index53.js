function fetchTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{console.log(response)
    return response.json()})
    .then(data=>{
        console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].completed==true){
                console.log(data[i]);
            }
        }
    })

}
fetchTodo();