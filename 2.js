const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

  console.log(getWorthyWorkers(workers));
  
  
  
  function getWorthyWorkers (workers){
    return workers.filter(el => el.salary > 1000 ? true : false);
  }