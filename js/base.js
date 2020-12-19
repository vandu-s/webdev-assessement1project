let allContent = []
let currentContent = []

const getLocalData = key => localStorage.getItem(key);


const loginUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login'
const orderUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders'
const productUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products'
const userUrl = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users'
const searchUser = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName='

const setLocalData = (key, val) => localStorage.setItem(key, JSON.stringify(val))

const checkLogin = () => {
    if (!getLocalData('login')) {
        window.location.href = "/login.html"
    }
}

const logout = () => {
        localStorage.clear()
        window.location.href = '/login.html'
    }
    // $(document).on('click', '.navLink', function() {
    //     $(this).addClass('activeNav').siblings().removeClass('activeNav');
    // })