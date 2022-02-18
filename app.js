const todoList = document.getElementById('todoList');
// 'https://jsonplaceholder.typicode.com'

const UserClient = new ApiClient('https://jsonplaceholder.typicode.com');

async function getTodos() {
	try {
		const users = await UserClient.get('/users');

		saveUsers(users);
	} catch (error) {
		const p = document.createElement('p');
		p.innerText = error.message;
		todoList.replaceWith(p);
	}
}

function saveTodos(todos) {
	for (let todo of todos) {
		const todoItem = `<li id="${todo.id}">${todo.title}</li>`;

		todoList.innerHTML += todoItem;
	}
}

function saveUsers(users) {
	for (let user of users) {
		const userItem = `<li id="${user.id}">${user.name}</li>`;

		userList.innerHTML += userItem;
	}
}

getTodos();
