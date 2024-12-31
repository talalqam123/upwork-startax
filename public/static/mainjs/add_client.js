$(function () {
  $('#client_type').on('change', function () {
    var selectedValue = $(this).val();
    $('#CIN_numbr').attr('required', false);
    $('[data-ctype="Individual"]').addClass('d-none');
    $('[data-ctype="Company"]').addClass('d-none');

    $('#editClientForm').bootstrapValidator('removeField', 'CIN_numbr');
    $('#editClientForm').bootstrapValidator('resetForm', true);

    updateValidationMessage('DOB', 'notEmpty', 'Date of Formation is required and must be a valid date');
    updateValidationMessage('DOB', 'regexp', 'Date of Formation is not valid');

    switch (selectedValue) {
      case 'Individual':
        $('[data-ctype="Individual"]').removeClass('d-none');
        $('#last_name_label').text('Last Name');
        $('#dob_label').text('Date of Birth');

        updateValidationMessage('last_name', 'notEmpty', 'Last Name is required and cannot be empty');
        updateValidationMessage('DOB', 'notEmpty', 'Date of Birth is required and must be a valid date');
        updateValidationMessage('DOB', 'regexp', 'Date of Birth is not valid');
        break;

      case 'HUF':
        $('#last_name_label').text('Name of the HUF');
        $('#dob_label').text('Date of Formation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of the HUF is required and cannot be empty');

        break;

      case 'Company Public':
        $('[data-ctype="Company"]').removeClass('d-none');
        $('#CIN_numbr').attr('required', true);

        $('#editClientForm').bootstrapValidator('addField', 'CIN_numbr', {
            validators: {
                notEmpty: {
                    message: 'CIN Number is required and cannot be empty'
                }
            }
        });
        $('#last_name_label').text('Name of Company');
        $('#dob_label').text('Date of Incorporation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of Company is required and cannot be empty');
        updateValidationMessage('DOB', 'notEmpty', 'Date of Incorporation is required and must be a valid date');
        updateValidationMessage('DOB', 'regexp', 'Date of Incorporation is not valid');
        break;

      case 'Company Private':
        $('[data-ctype="Company"]').removeClass('d-none');
        $('#CIN_numbr').attr('required', true);

        $('#editClientForm').bootstrapValidator('addField', 'CIN_numbr', {
          validators: {
              notEmpty: {
                  message: 'CIN Number is required and cannot be empty'
              }
          }
        });
        $('#last_name_label').text('Name of Company');
        $('#dob_label').text('Date of Incorporation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of Company is required and cannot be empty');
        updateValidationMessage('DOB', 'notEmpty', 'Date of Incorporation is required and must be a valid date');
        updateValidationMessage('DOB', 'regexp', 'Date of Incorporation is not valid');

        break;

      case 'LLP':
        $('#last_name_label').text('Name of LLP');
        $('#dob_label').text('Date of Formation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of LLP is required and cannot be empty');
        break;

      case 'Firm':
        $('#last_name_label').text('Name of Firm');
        $('#dob_label').text('Date of Formation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of Firm is required and cannot be empty');
        break;

      case 'AOP/BOI':
        $('#last_name_label').text('Name of AOP/BOI');
        $('#dob_label').text('Date of Formation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of AOP/BOI is required and cannot be empty');
        break;

      case 'Cooperative Society':
        $('#last_name_label').text('Name of Cooperative Society');
        $('#dob_label').text('Date of Formation');

        updateValidationMessage('last_name', 'notEmpty', 'Name of Cooperative Society is required and cannot be empty');
        break;
    }
  });
});

function updateValidationMessage(fieldName, validatorName, message) {
$('#editClientForm').bootstrapValidator('updateMessage', fieldName, validatorName, message);
}