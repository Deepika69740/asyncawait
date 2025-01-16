let url="https://dummyjson.com/todos"
async function getdata(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    res.todos.forEach((x)=>{
        let container=document.createElement("div")
        let data1=`Id: ${x.id}
        Todo: ${x.todo}
        userid: ${x.userId}
        completed: ${x.completed}`
        container.innerHTML=`<p>${data1}<p>`
        document.body.appendChild(container)
        // console.log(x.todo)
    })
}getdata()