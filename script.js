function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date(document.getElementById('today').value);

    if (dob > today) {
        alert("DOB cannot be in the future!");
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('age').innerText = age + " Year";
}