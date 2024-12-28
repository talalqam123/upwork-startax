function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!/^(GET|HEAD|OPTIONS|TRACE)$/i.test(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

function formToJson(formData){
    var jsonData = {};
    $.each(formData, function() {
        if (jsonData[this.name]) {
            if (!jsonData[this.name].push) {
                jsonData[this.name] = [jsonData[this.name]];
            }
            jsonData[this.name].push(this.value || '');
        } else {
            jsonData[this.name] = this.value || '';
        }
    });
    return jsonData;
}


function tosterSuccess(message){
    toastr.options = {
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr.success(message, 'Success', {
    "toastClass": "toast-custom-success"
    });
}

function tosterError(message){
    toastr.options = {
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    toastr.error('Error occurred!', 'Error', {
    "toastClass": "toast-custom-error"
    });
}

var BASE_ABS_URL = 'http://127.0.0.1:8000/'

function SendAjaxRequest(relUrl,data,method="POST"){
    $.ajax({
        url: BASE_ABS_URL+relUrl,
        type: method,
        data: JSON.stringify(data),
        contentType: 'application/json',
        headers: {
            "X-CSRFToken": csrftoken
        },
        success: function (response) {
            tosterSuccess(response.message)
            console.log(response);
            if( response.hasAttribute('data')){
                return response.data
            }
        },
        error: function (xhr, status, error) {
            // Display error toast notification
            tosterError(error)
            console.error(xhr.responseText);
        }
    });
    
    return null
}