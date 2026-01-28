export async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }

}

export async function Login() {
    const users = await getUsers()
    for (let user in users) {
        console.log(user);
    }
}
