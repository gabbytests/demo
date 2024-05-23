window.onload = function() {
    if (!localStorage.getItem('dontShowPopup')) {
        showPopup();
    }
};

function showPopup() {
    const popup = document.getElementById('admissionsPopup');
    popup.style.display = 'block';

    // Close the popup when clicking anywhere outside the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            closePopup();
        }
    };
}

function closePopup() {
    const dontShowAgain = document.getElementById('dontShowAgain').checked;
    if (dontShowAgain) {
        localStorage.setItem('dontShowPopup', 'true');
    }
    document.getElementById('admissionsPopup').style.display = 'none';
    // Also remove the window onclick event listener to prevent memory leaks
    window.onclick = null;
}
