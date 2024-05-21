const accounts = [
    "@user1",
    "@user2",
    "@user3",
    "@user4",
    "@user5",
    "@user6",
    "@user7",
    "@user8",
    "@user9",
    "@user10"
];

document.getElementById('randomize-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * accounts.length);
    const randomAccount = accounts[randomIndex];
    document.getElementById('account-display').textContent = randomAccount;
});
