// 1. create login (uid) and logout() sync actions
{
    type: "Login",
    uid: 'someuid'
}

{
    type: 'LOGOUT'
}

// 2. create & register authReducer (use auth namespace for redux)

// after login, the redux state should look like this:
{
    // ... Other attributes
    auth: {
        uid: 'someuid'
    }
}

// on logout, the redux state should look like this:
{
    // ...Other attributes
    auth: {}
}

// 3. write four test. login action.login action. login reducer.logout reducer


// ====================================


{
    todos: {
        12341234: {
            text: 'something'
        }
    }
}

{
    users: {
        someuid: {
            name: 'Faza',
            todos: {
                123anc: {
                    text: 'Something to do'
                }
            }
        }
    }
}