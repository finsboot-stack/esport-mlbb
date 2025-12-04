const correctUsername = 'osmakanda';
const correctPassword = 'osmakandamaju';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === correctUsername && password === correctPassword) {
        document.getElementById('login').classList.remove('active');
        document.getElementById('dashboard').classList.add('active');
    } else {
        document.getElementById('loginMessage').textContent = 'Login gagal';
    }
});

function updateBracket() {
    const bracketText = document.getElementById('bracketText').value;
    // Simulasi update (dalam realitas, simpan ke server atau localStorage)
    alert('Bracket updated: ' + bracketText);
}

function addTeam() {
    const newTeam = document.getElementById('newTeam').value;
    // Simulasi tambah tim
    alert('Tim ditambahkan: ' + newTeam);
}

function deleteTeam() {
    const deleteTeamName = document.getElementById('deleteTeam').value;
    // Simulasi hapus tim
    alert('Tim dihapus: ' + deleteTeamName);
}

document.getElementById('scoreForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const match = document.getElementById('match').value;
    const score = document.getElementById('score').value;
    alert('Skor updated: ' + match + ' - ' + score);
});
