const form = document.getElementById('employeeForm');
const tableBody = document.getElementById('employeeList');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const email = formData.get('email');
  const hireDate = formData.get('hire_date');

 
  const newRow = document.createElement('tr');
  const firstnameCell = document.createElement('td');
  const lastnameCell = document.createElement('td');
  const emailCell = document.createElement('td');
  const hireDateCell = document.createElement('td');
  const actionsCell = document.createElement('td');

  firstnameCell.textContent = firstname;
  lastnameCell.textContent = lastname;
  emailCell.textContent = email;
  hireDateCell.textContent = hireDate;
  });


  actionsCell.appendChild(deleteButton);


  newRow.appendChild(firstnameCell);
  newRow.appendChild(lastnameCell);
  newRow.appendChild(emailCell);
  newRow.appendChild(hireDateCell);
  newRow.appendChild(actionsCell);

  tableBody.appendChild(newRow);

  form.reset();


function deleteRow(row) {
  row.remove();
}