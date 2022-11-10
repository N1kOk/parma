export type User =
	{ [X in 'firstName' | 'lastName' | 'patronymic' | 'phone' | 'mail' | 'imageUrl']: string } &
	{ id: number, isAdmin: boolean }


export let users: { [X: string]: User } = {
	'test:test': {
		id: Math.random(),
		isAdmin: true,
		firstName: 'Test name',
		lastName: 'Test surname',
		patronymic: 'Test patronymic',
		mail: 'Test mail',
		phone: '+7 987 654 32 10',
		imageUrl: '',
	},
	
	'cos:cos': {
		id: Math.random(),
		isAdmin: false,
		firstName: 'Иван',
		lastName: 'Косарский',
		patronymic: 'Александрович',
		phone: '+7 922 300 30 08',
		mail: 'cos@gmail.com',
		imageUrl: '/images/man.png',
	},
}

initUsers()

export function getUser(login: string, pass: string) {
	return users[login + ':' + pass]
}

export function createUser(user: Omit<User, 'id' | 'imageUrl' | 'isAdmin'> & { pass: string }) {
	for (const key in user)
		if (!user[key as keyof typeof user])
			throw `${key} = undefined`
	
	users[user.mail + ':' + user.pass] = {
		id: Math.random(),
		isAdmin: false,
		imageUrl: '',
		...user,
	}
	
	saveUsers()
}

function initUsers() {
	if (!localStorage.users) return
	
	users = JSON.parse(localStorage.users)
}

function saveUsers() {
	localStorage.users = JSON.stringify(users)
}
