document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employeeForm');
    const tableBody = document.getElementById('employeeList');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const firstname = formData.get('firstname');
      const lastname = formData.get('lastname');
      const email = formData.get('email');
      const hireDate = formData.get('hire_date');
      const photo = formData.get('photo'); 

      const newRow = document.createElement('tr');

      const photoCell = document.createElement('td');
      if (photo) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(photo); 
        img.width = 100;
        img.height = 100; 
        photoCell.appendChild(img);
      } else {
        photoCell.textContent = 'No photo';
      }

      const firstnameCell = document.createElement('td');
      firstnameCell.textContent = firstname;

      const lastnameCell = document.createElement('td');
      lastnameCell.textContent = lastname;

      const emailCell = document.createElement('td');
      emailCell.textContent = email;

      const hireDateCell = document.createElement('td');
      hireDateCell.textContent = hireDate;

      const actionsCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteRow(newRow);
      });
      actionsCell.appendChild(deleteButton);

      newRow.appendChild(photoCell);
      newRow.appendChild(firstnameCell);
      newRow.appendChild(lastnameCell);
      newRow.appendChild(emailCell);
      newRow.appendChild(hireDateCell);
      newRow.appendChild(actionsCell);

      tableBody.appendChild(newRow);

      form.reset();
    });

    function deleteRow(row) {
      row.remove();
    }
  });