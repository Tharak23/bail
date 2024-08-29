document.getElementById('fetchDetails').addEventListener('click', function() {
    const prisonerName = document.getElementById('prisonerName').value;

    if (!prisonerName) {
        alert('Please enter Prisoner Name');
        return;
    }

    // Fetch prisoner details from the server
    fetch(`/api/prisoners/${prisonerName}`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById('prisonerDetails').innerHTML = `
                    <h3>Prisoner Details</h3>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Date of Birth:</strong> ${data.dob}</p>
                    <p><strong>Charges:</strong> ${data.charges}</p>
                    <p><strong>Status:</strong> ${data.status}</p>
                `;
            } else {
                document.getElementById('prisonerDetails').innerHTML = `
                    <p>No details found for prisoner ${prisonerName}. Please check the name and try again.</p>
                `;
            }
        });
});

document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const prisonerName = document.getElementById('prisonerName').value;
    const report = document.getElementById('report').value;

    if (!prisonerName || !report) {
        alert('Please fill in both Prisoner Name and Report');
        return;
    }

    // Submit request to the server
    fetch('/api/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prisonerName, report })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('reportForm').reset();
        document.getElementById('prisonerDetails').innerHTML = '';
    });
});
