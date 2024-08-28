const reviewList = document.getElementById('reviewList');
const requestDetails = document.getElementById('requestDetails');

const requests = [
    { id: 1, prisonerName: 'John Doe', charges: 'Theft' },
    { id: 2, prisonerName: 'Jane Doe', charges: 'Fraud' }
];

requests.forEach(request => {
    const li = document.createElement('li');
    li.textContent = `${request.prisonerName} - ${request.charges}`;
    li.dataset.id = request.id;
    li.addEventListener('click', function() {
        requestDetails.innerHTML = `
            <h3>Request Details</h3>
            <p>Prisoner Name: ${request.prisonerName}</p>
            <p>Charges: ${request.charges}</p>
            <button onclick="approveRequest(${request.id})">Approve</button>
            <button onclick="denyRequest(${request.id})">Deny</button>
        `;
    });
    reviewList.appendChild(li);
});

function approveRequest(id) {
    alert(`Request ${id} approved`);
}

function denyRequest(id) {
    alert(`Request ${id} denied`);
}
