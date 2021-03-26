// your JavaScript goes here, you can delete this comment
const todolist = [{todo: "clone repo for starter code", status:"complete"}, 
    {todo: "add CSS and Javascript to Index.html", status:"complete"},
    {todo: "create a for loop", status:"started"}, 
    {todo: "create a second for loop", status:"started"}
];

const completedtodos = [];

for (i in todolist) {
    if (todolist[i].status === "complete") {
        completedtodos.push(todolist[i])
    }
}

let {
    todo: {
    }
    status: {
    }
} = completedtodos

for (i in completedtodos) {
    console.log(todolist[0].status)
}