let url="https://dummyjson.com/recipes"
async function getdata(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    res.recipes.forEach((x)=>{
        // console.log(x.name)
        let container=document.createElement("div")
        container.innerHTML=
        `<p>
        "${x.name}"<p>`
        document.body.appendChild(container)
    })
    }
getdata()