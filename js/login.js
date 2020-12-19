const setContent = () => getLocalData('login') && window.location.replace('/order.html')

$(document).ready(function() {
    setContent();

    $('#loginForm').submit((e) => {
        e.preventDefault()
        let userName = $('#userName').val()
        let password = $('#password').val()
        if (userName === password) {
            $.ajax({
                type: "POST",
                url: loginUrl,
                data: {
                    userName: userName,
                    password: password
                },
                success: (success) => {
                    setLocalData('login', true)
                    alert('login success')
                    window.location.href = '/order.html'
                }
            });
        } else {
            alert('please enter valid credential')
        }
    })

});