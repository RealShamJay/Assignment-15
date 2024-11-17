/* Task 1:
1. Create an async function to handle the fetch request.
2. Use fetch() to call the provided API URL.
3. Extract JSON data using .then() and handle the result.
4. Log the retrieved data to the console.
*/
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

async function getData() {
    try {
        const result = await fetch(API_ENDPOINT);
        const jsonData = await result.json();
        console.log(jsonData);
    } catch (err) {
        console.error('Fetch Error:', err);
    }
}

// Using fetch directly for another approach
fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(output => console.log(output))
    .catch(err => console.error('Error:', err));

/* Task 2:
1. Add an input field and button in HTML.
2. Capture the input value on button click.
3. Use the input value in an API request and show the response.
*/
const inputField = document.getElementById('userInput');
const triggerButton = document.getElementById('fetchButton');
const outputDiv = document.getElementById('result');

triggerButton.addEventListener('click', async () => {
    const inputValue = inputField.value;
    try {
        const apiResponse = await fetch(`${inputValue}`);
        const userData = await apiResponse.json();
        outputDiv.textContent = `User: ${userData.login}, Name: ${userData.name}, Repos: ${userData.public_repos}`;
    } catch (err) {
        outputDiv.textContent = `An error occurred: ${err.message}`;
    }
});

/* Task 3:
1. Define a function that accepts a user ID.
2. Use fetch() with DELETE method and pass the user ID in the URL.
3. Log the operation's status.
*/
async function removeUser(userId) {
    try {
        const deleteResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE'
        });

        if (deleteResponse.ok) {
            console.log('User removed successfully');
        } else {
            console.error('Failed to delete user:', deleteResponse.statusText);
        }
    } catch (err) {
        console.error('Error during delete operation:', err);
    }
}

removeUser(4);

/* Task 4:
1. Create an async function for a POST request.
2. Set headers and convert data to JSON.
3. Log the response.
*/
async function sendData(apiUrl, payload) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const responseBody = await response.json();
        console.log(responseBody);
    } catch (err) {
        console.error('POST Error:', err);
    }
}

const sampleData = { name: 'Shammah david', email: 'shammahdavid.sd@gmail.com' };
sendData(API_ENDPOINT, sampleData);

/* Task 5:
1. Use Promise.all() to fetch data from multiple URLs.
2. Combine and display the results.
*/
async function fetchMultipleData() {
    try {
        const [res1, res2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users/1'),
            fetch('https://jsonplaceholder.typicode.com/users/2')
        ]);

        const user1 = await res1.json();
        const user2 = await res2.json();

        console.log('User 1:', user1, 'User 2:', user2);
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

fetchMultipleData();
