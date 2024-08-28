document.getElementById('bailRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const prisonerName = document.getElementById('prisonerName').value;
    const charges = document.getElementById('charges').value;

    const requestList = document.getElementById('requestList');
    const li = document.createElement('li');
    li.textContent = `${prisonerName} - ${charges}`;
    requestList.appendChild(li);

    document.getElementById('prisonerName').value = '';
    document.getElementById('charges').value = '';
});
