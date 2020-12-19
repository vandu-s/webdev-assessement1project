const renderUI = (data) => {
    $('tbody').html('')
    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            $('tbody').append(`
                <tr>
                    <td class="light">${data[i].id}</td>
                    <td> <img src=${data[i].profilePic} alt="profile pic"> </td>
                    <td class="light">${data[i].fullName}</td>
                    <td>${data[i].dob}</td>
                    <td class="light">${data[i].gender}</td>
                    <td class="light">${data[i].currentCity} , ${data[i].currentCountry}</td>
                </tr>
            `)
        }
    }
}

const getContent = () => {
    $.ajax({
        url: userUrl,
        success: (result) => {
            allContent = result
            renderUI(allContent)
        }
    })
}

const searchContent = (urlData) => {
    $.ajax({
        url: urlData,
        success: (result) => {
            currentContent = result
            renderUI(currentContent)
        }
    })
}

$(document).ready(function() {
    checkLogin()
    getContent()

    $('#searchForm').submit((e) => {
        e.preventDefault()
        const inputVal = $('#searchBox').val()
        if (!inputVal.trim()) {
            renderUI(allContent)
            return
        }
        if (inputVal.length > 1) {
            $('#searchBox').val('')
            const url = searchUser + inputVal
            searchContent(url)
        } else {
            alert('please enter atlease 2 charecter')
        }
    })
});