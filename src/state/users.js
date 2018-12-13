const LOAD_DATA = 'users/LOAD_DATA'



const INITIAL_STATE = {
    usersArray: []
}

export const loadUsersData = () => {

    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => console.log(data))
}

const loadDataToArray = () => ({
    type: LOAD_DATA,
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }

}