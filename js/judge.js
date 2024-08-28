const reviewList = document.getElementById('reviewList');
const requestDetails = document.getElementById('requestDetails');

// Simulate some requests
const requests = [
    { id: 1, prisonerName: 'John Doe', report: 'The prisoner has good behavior.' },
    { id: 2, prisonerName: 'Jane Doe', report: 'The prisoner is a repeat offender.' }
];

requests.forEach(request => {
    const li = document.createElement('li');
    li.textContent = `${request.prisonerName} - ${request.report}`;
    li.dataset.id = request.id;
    li.addEventListener('click', function() {
        requestDetails.innerHTML = `
            <h3>Request Details</h3>
            <p><strong>Prisoner Name:</strong> ${request.prisonerName}</p>
            <p><strong>Report:</strong> ${request.report}</p>
            <button onclick="approveRequest(${request.id})">Approve</button>
            <button onclick="denyRequest(${request.id})">Deny</button>
        `;
    });
    reviewList.appendChild(li);
});

function approveRequest(id) {
    alert(`Request ${id} approved`);
    // In a real application, you would handle request approval here
}

function denyRequest(id) {
    alert(`Request ${id} denied`);
    // In a real application, you would handle request denial here
}
