$(function(){
    $('#editClientaddressForm').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        residence_no: {
          message: 'ResidenceNo is not valid',
          validators: {
            notEmpty: {
              message: 'ResidenceNo is required and cannot be empty'
            },
            stringLength: {
              min: 1,
              max: 50,
              message: 'ResidenceNo must be more than 1 and less than 50 characters long'
            }
          }
        },
        pin_code: {
          message: 'Pin Code is not valid',
          validators: {
            notEmpty: {
              message: 'Pin Code is required and cannot be empty'
            },
            regexp: {
              regexp: /[1-9]{1}[0-9]{5}/,
              message: 'Pin Code is not valid'
            }
          }
        },
        country_code_mobile: {
          message: 'Mobile Country Code is not valid',
          validators: {
            notEmpty: {
              message: 'Mobile Country Code is required and cannot be empty'
            },
            regexp: {
              regexp: /[0-9]{1,5}/,
              message: 'Mobile Country Code is not valid'
            }
          }
        },
        mobile_number: {
          message: 'Mobile Number is not valid',
          validators: {
            notEmpty: {
              message: 'Mobile Number is required and cannot be empty'
            },
            regexp: {
              regexp: /[1-9]{1}[0-9]{9}|[1-9]{1}[0-9]{4,9}/,
              message: 'Mobile Number is not valid'
            }
          }
        },
        email: {
          message: 'Email is not valid',
          validators: {
            notEmpty: {
              message: 'Email is required and cannot be empty'
            },
            regexp: {
              regexp: /([\.a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(([a-zA-Z0-9_\-])*\.([a-zA-Z0-9_\-])+)+/,
              message: 'Email is not valid'
            }
          }
        },
      }
    })
    .on('success.form.bv', function (event) {
      event.preventDefault();
      var formData = $('#editClientaddressForm').serializeArray();
      var jsonData = formToJson(formData);
      console.log(jsonData)
      SendAjaxRequest('home/client/address/create/',jsonData);
    });

    $('input[name="residence_type"]').on('change', function () {
      const type = this.value;
  
      if (type == 'foreign'){
        $('.pin_code_div').addClass('d-none');
        $('.country_code_div').removeClass('d-none');
        $('.state_code_div').addClass('d-none');
        $('.zip_code_div').removeClass('d-none');
        $('.country_mobile_div').removeClass('d-none');
      }else{
        $('.pin_code_div').removeClass('d-none');
        $('.country_code_div').addClass('d-none');
        $('.state_code_div').removeClass('d-none');
        $('.zip_code_div').addClass('d-none');
        $('.country_mobile_div').addClass('d-none');
      }
    });
});