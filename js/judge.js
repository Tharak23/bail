function loadRequests() {
    const reviewList = document.getElementById('reviewList');
    const requestDetails = document.getElementById('requestDetails');

    // Simulate fetching requests from the server
    fetch('/api/requests')
        .then(response => response.json())
        .then(requests => {
            reviewList.innerHTML = ''; // Clear existing list
            requests.forEach((request, index) => {
                const li = document.createElement('li');
                li.textContent = `${request.prisonerName} - ${request.report}`;
                li.dataset.id = index;
                li.addEventListener('click', function() {
                    requestDetails.innerHTML = `
                        <h3>Request Details</h3>
                        <p><strong>Prisoner Name:</strong> ${request.prisonerName}</p>
                        <p><strong>Report:</strong> ${request.report}</p>
                        <button onclick="approveRequest(${index})">Approve</button>
                        <button onclick="denyRequest(${index})">Deny</button>
                    `;
                });
                reviewList.appendChild(li);
            });
        });
}

function approveRequest(index) {
    // Handle request approval logic
    alert(`Request ${index} approved`);
}

function denyRequest(index) {
    // Handle request denial logic
    alert(`Request ${index} denied`);
}

document.addEventListener('DOMContentLoaded', loadRequests);
