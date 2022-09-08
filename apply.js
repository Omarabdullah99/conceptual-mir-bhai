console.log('add apply')

const getElementId=(id)=>{
    const element=document.getElementById(id)
    return element
}
const handleSubmit=()=>{
    const inputField=getElementId('todo-text').value;
    const todos=JSON.parse(localStorage.getItem("Todos"))
    
    
    if(!todos){
        const todoList=[
            {
                title:inputField,
                completed:false
            }
    
        ]
        localStorage.setItem("Todos",JSON.stringify(todoList))

    }

    else{
        const todoList=[
            ...todos,
            {
                title:inputField,
                completed:false
            }
    
        ]
        localStorage.setItem("Todos",JSON.stringify(todoList))
        

    }
    display()
    
   
}

const display=()=>{
    const todos=JSON.parse(localStorage.getItem("Todos"))
    // console.log('here is display ',todos)
    const ul=getElementId('todo-list')
    ul.innerHTML="",

    todos.forEach((item)=>{
        // console.log('item is',item)
        const li=document.createElement('li')
        li.innerHTML=`

        ${item.title}
        <button onclick="OneItemDelet('${JSON.stringify(item)}')">-</button>

        `

        ul.appendChild(li)
       
        
        
    })

}
display()

const OneItemDelet=(item)=>{
  
//    localStorage.remove(itm)
console.log(item)
   display()
}




const handleClearAll=()=>{
    localStorage.removeItem('Todos')
    display()
}