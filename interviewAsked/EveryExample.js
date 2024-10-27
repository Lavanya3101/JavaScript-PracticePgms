var folks = [ 
    {name: "Bob", age: "32", occupation: "developer"}, 
    {name: "Bill", age: "17", occupation: "developer"}, 
    {name: "Bob", age: "40", occupation: "developer"} 
  ]

  const hasDeveloper=folks.every(p=>p.occupation=="developer");
  console.log(hasDeveloper);
  