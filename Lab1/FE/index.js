let count = 0;
function fetchEmployees() {
  fetch("http://localhost:3000/api/v1/employee")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("dataTable");
      tableBody.innerHTML = "";
      const list = data.data;
      count = list.length;
      console.log(count, "form fetch");
      list.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", deleteEmployee);
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

// TODO
// add event listener to submit button

document
  .getElementsByClassName("btn-primary")[0]
  .addEventListener("click", createEmployee);

// TODO
// add event listener to delete button
//done inside the buttton creation code

// TODO
function createEmployee() {
  // get data from input field
  // send data to BE
  // call fetchEmployees
  var empName = document.getElementById("name").value;
  var id = document.getElementById("id").value;

  fetch("http://localhost:3000/api/v1/employee", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, name: empName }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      fetchEmployees();
    })
    .catch((error) => console.error(error));

}

// TODO
function deleteEmployee(event) {
  // get id
  // send id to BE
  // call fetchEmployees

  let id = event.target.parentElement.parentElement.children[0].innerHTML;

  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "hi");
      fetchEmployees();
    })
    .catch((error) => console.error(error));
}

fetchEmployees();
