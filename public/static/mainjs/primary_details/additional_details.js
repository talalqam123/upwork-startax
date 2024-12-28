$(function(){
    function addNewTask(data){
        console.log(data, "-------------");
        var newTask = `
                        <li>
                            <div class="icheck-primary d-inline ml-2">
                                <input type="checkbox" name="${data.id}" id="${data.id}" />
                                <label for="${data.id}"></label>
                            </div>
                            <span class="text">${data.note}</span>
                            <small class="badge badge-danger float-right">
                                <i class="far fa-clock"></i> ${Date.UTC()}
                            </small>
                            <div class="tools">
                                <i class="fas fa-trash"></i>
                            </div>
                        </li>`;
                    $('#todo-list-items').append(newTask);
    }

    $('#submit-task-form').click(function (event) {
        event.preventDefault();
        var formData = $('#new-task-form').serializeArray();
        var jsonData = formToJson(formData);
        console.log(jsonData)
        var data = SendAjaxRequest('home/client/note/create/',jsonData);
        addNewTask(data);
    });

    $('#additional-details')
    .submit(function (event) {
        event.preventDefault();
        var formData = $('#additional-details').serializeArray();
        var jsonData = formToJson(formData);
        console.log(jsonData)
        SendAjaxRequest('home/client/additional/create/',jsonData);

    });

});