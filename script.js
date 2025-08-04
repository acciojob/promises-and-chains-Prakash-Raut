//your JS code here. If required.
const form = document.getElementById('userform');
const username = document.getElementById('name');
const age = document.getElementById('age');

function checkVotingEligibility(name, age) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
		}, 4000);
	})
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = nameInput.value.trim();
    const age = Number(ageInput.value);

	if (!name || !age) {
        alert("Please enter valid details.");
        return;
    }

	checkVotingEligibility(name, age)
        .then((message) => alert(message))
        .catch((error) => alert(error));
    });
})

