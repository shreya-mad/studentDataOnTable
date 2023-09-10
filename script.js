document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('employeeForm');
    const tableBody = document.querySelector('#employeeTable tbody');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const education = document.getElementById('education').value;
        const role = document.getElementById('role').value;
        const mobile = document.getElementById('mobile').value;
        const email = document.getElementById('email').value;
        const joiningDate = document.getElementById('joiningDate').value;

        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.textContent = name;
        cell2.textContent = education;
        cell3.textContent = role;
        cell4.textContent = mobile;
        cell5.textContent = email;
        cell6.textContent = joiningDate;

        form.reset();
    });
});