$(function(){

    $('#editClientForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
          last_name: {
            message: 'The last name is not valid',
            validators: {
              notEmpty: {
                message: 'The last name is required and cannot be empty'
              },
              stringLength: {
                min: 1,
                max: 75,
                message: 'The last name must be more than 1 and less than 75 characters long'
              }
            }
          },
          PAN_numbr: {
            message: 'Pan is not valid',
            validators: {
              notEmpty: {
                message: 'Pan is required and cannot be empty'
              },
              regexp: {
                regexp: /[A-Z]{5}[0-9]{4}[A-Z]/,
                message: 'PAN is not valid'
              }
            }
          },
          DOB: {
            message: 'Date of Birth is not valid',
            validators: {
              notEmpty: {
                message: 'Date of Birth is required and cannot be empty'
              },
              regexp: {
                regexp: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                message: 'Date of Birth is not valid'
              }
            }
          },
        }
      })
      .on('success.form.bv', function (event) {
        event.preventDefault();
        var formData = $('#editClientForm').serializeArray();
        var jsonData = formToJson(formData);
        SendAjaxRequest('home/client/create/',jsonData,"PUT");
        
      })
});
