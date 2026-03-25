function calculateSavings() {
    const currentCost = parseFloat(document.getElementById('currentCost').value);
    const users = parseInt(document.getElementById('users').value);
    const newToolCost = 20; // Example: hardcode or later make dynamic per page
    const savings = (currentCost - newToolCost) * users;
    document.getElementById('result').innerText = `You could save $${savings}/month by switching.`;
}
