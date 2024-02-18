const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const id =req.params["id"];
  const foundEmp = employee.findIndex((emp)=> emp.id === id );
  console.log(foundEmp);
  employee.splice(foundEmp,1);
  console.log(employee);
  res.status(200).json({data:true});
  
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const id =req.body.id;
  const name =req.body.name;
  console.log(id,name);
  const newEmployee = {
    id: id,
    name: name,
  }
  employee.push(newEmployee);
  res.status(200).json({data:true});
};
