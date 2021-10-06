export function filtered (onState,todo){
    return onState !== ""? todo.filter(item => item.completed === onState):todo
}


export function filterQuery(todo, query) {
    return query !=="" ? todo.filter(item=>item.name.toLowerCase().indexOf(query.toLowerCase())!==-1):todo
  }
  