document.getElementById('fetchDetails').addEventListener('click', function() {
    const prisonerName = document.getElementById('prisonerName').value;
    const dob = document.getElementById('dob').value;

    if (!prisonerName || !dob) {
        alert('Please enter both Prisoner Name and Date of Birth');
        return;
    }

    // Simulate fetching prisoner details
    const prisonerDetails = {
        "John Doe": { dob: "1990-01-01", charges: "Theft", status: "Awaiting trial" },
        "Jane Doe": { dob: "1985-05-15", charges: "Fraud", status: "Incarcerated" }
    };

    const details = prisonerDetails[prisonerName];

    if (details) {
        document.getElementById('prisonerDetails').innerHTML = `
            <h3>Prisoner Details</h3>
            <p><strong>Name:</strong> ${prisonerName}</p>
            <p><strong>Date of Birth:</strong> ${details.dob}</p>
            <p><strong>Charges:</strong> ${details.charges}</p>
            <p><strong>Status:</strong> ${details.status}</p>
        `;
    } else {
        document.getElementById('prisonerDetails').innerHTML = `
            <p>No details found for prisoner ${prisonerName}. Please check the name and try again.</p>
        `;
    }
});

document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const prisonerName = document.getElementById('prisonerName').value;
    const report = document.getElementById('report').value;

    if (!prisonerName || !report) {
        alert('Please fill in both Prisoner Name and Report');
        return;
    }

    const requestList = document.getElementById('requestList');
    const li = document.createElement('li');
    li.textContent = `Request for ${prisonerName}: ${report}`;
    requestList.appendChild(li);

    document.getElementById('reportForm').reset();
    document.getElementById('prisonerDetails').innerHTML = '';
});
