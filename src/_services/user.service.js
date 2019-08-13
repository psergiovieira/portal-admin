export const userService = {
    login,
    logout,
    getUser
};

export const config = {
    apiUrl: 'http://localhost:4000'
};

function login(username, password) {
    const user = {
        id: 1,
        username: "PortalAdmin",
        firstName: "Portal",
        lastName: "Admin",
        token: 'fake-jwt-token'
    }
    if (validateLogin(username, password)) {
        localStorage.setItem('user', JSON.stringify(user));
    } else {
        return Promise.reject('Username or password is incorrect');
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(user)) });
        });
    });
}

function validateLogin(username, password) {
    return username === "123" && password === "123"
}

function logout() {
    localStorage.removeItem('user');
}

function getUser() {
    const user = {
        id: 1,
        username: "PortalAdmin",
        firstName: "Portal",
        lastName: "Admin",
        token: 'fake-jwt-token'
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        });
    });
}





