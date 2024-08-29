function loadRequests() {
    const reviewList = document.getElementById('reviewList');
    const requestDetails = document.getElementById('requestDetails');

    const requests = JSON.parse(localStorage.getItem('bailRequests')) || [];

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
}

function approveRequest(index) {
    const requests = JSON.parse(localStorage.getItem('bailRequests')) || [];
    requests.splice(index, 1); // Remove the approved request
    localStorage.setItem('bailRequests', JSON.stringify(requests));
    loadRequests(); // Reload requests
}

function denyRequest(index) {
    const requests = JSON.parse(localStorage.getItem('bailRequests')) || [];
    requests.splice(index, 1); // Remove the denied request
    localStorage.setItem('bailRequests', JSON.stringify(requests));
    loadRequests(); // Reload requests
}

document.addEventListener('DOMContentLoaded', loadRequests);
