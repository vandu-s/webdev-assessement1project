const expired = thatDay => (new Date()) > (new Date(thatDay))

const settingContent = () => {
    const expiredId = $("#expired").prop('checked')
    const lowStockId = $("#lowStock").prop('checked')
    if (allContent.length > 0) {
        currentContent = allContent.filter((value) => {
            if (expiredId) return expired(value.expiryDate)
            return true
        })
        currentContent = currentContent.filter((value) => {
            if (lowStockId) return value.stock < 100
            return true
        })
    }
}

const renderUI = () => {
    $('tbody').html('')
    $('#count').html(currentContent.length)
    if (currentContent.length > 0) {
        for (let i = 0; i < currentContent.length; i++) {
            $('tbody').append(`
                <tr>
                    <td class="light w5"> ${currentContent[i].id} </td>
                    <td> ${currentContent[i].medicineName} </td>
                    <td class="light">${currentContent[i].medicineBrand}</td>
                    <td class="w10rem">${currentContent[i].expiryDate}</td>
                    <td class="light">$${currentContent[i].unitPrice}</td>
                    <td>${currentContent[i].stock}</td>
                </tr>
            `)
        }
    }
}

const showContent = () => {
    settingContent()
    renderUI()
}

const getContent = () => {
    $.ajax({
        url: productUrl,
        success: (result) => {
            allContent = result
            showContent()
        }
    })
}

$(document).ready(function() {
    checkLogin()
    getContent()
    $('.checkBox').change(showContent)
    expired()
});