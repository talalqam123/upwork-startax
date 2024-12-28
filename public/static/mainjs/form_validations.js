$(function(){

    //Client basic details validator
    $('#editClientForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
            message: 'The first name is not valid',
                validators: {
                    stringLength: {
                        max: 25,
                        message: 'The first name less than 25 characters long'
                    }
                }
            },
            middel_name: {
                message: 'The middle name is not valid',
                validators: {
                    stringLength: {
                        max: 25,
                        message: 'The middle name must be less than 25 characters long'
                    }
                }
            },
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
                regexp: /^([A-Z]{5}[0-9]{4}[A-Z])$/,
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
                regexp: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/,
                message: 'Date of Birth is not valid'
              }
            }
          },
        }
      })
    
    //Client Address validator
    $('#editClientaddressForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            residence_no: {
                message: 'Residence No is not valid',
                validators: {
                    notEmpty: {
                        message: 'Residence No is required and cannot be empty'
                    },
                    stringLength: {
                        max: 50,
                        message: 'Residence No must be less than 50 characters long'
                    }
                }
            },
            residence_name: {
                message: 'Residence Name is not valid',
                validators: {
                    stringLength: {
                        max: 50,
                        message: 'Residence Name must be less than 50 characters long'
                    }
                }
            },
            road_street: {
                message: 'Road or Street is not valid',
                validators: {
                    stringLength: {
                        max: 50,
                        message: 'Road or Street must be less than 50 characters long'
                    }
                }
            },
            locality_or_area: {
                message: 'Locality or Area is not valid',
                validators: {
                    notEmpty: {
                        message: 'Locality or Area is required and cannot be empty'
                    },
                    stringLength: {
                        max: 50,
                        message: 'Locality or Area must be less than 50 characters long'
                    }
                }
            },
            district: {
                message: 'City/Town/District is not valid',
                validators: {
                    notEmpty: {
                        message: 'City/Town/District is required and cannot be empty'
                    },
                    stringLength: {
                        max: 50,
                        message: 'City/Town/District must be less than 50 characters long'
                    }
                }
            },
            email: {
                message: 'Email Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Email Address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    },
                    stringLength: {
                        max: 125,
                        message: 'Email Address must be less than 125 characters long'
                    }
                }
            },
            mobile_number: {
                message: 'Mobile Phone number is not valid',
                validators: {
                    notEmpty: {
                        message: 'Mobile Phone number is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^[1-9][0-9]{9}$/,
                        message: 'Mobile Phone number must be 10 digits long'
                    }
                }
            },
            pin_code: {
                message: 'Pin Code is not valid',
                validators: {
                    regexp: {
                        regexp: /^[1-9][0-9]{5}$/,
                        message: 'Pin Code must be a 6-digit number'
                    }
                }
            },
            zip_code: {
                message: 'Zip Code is not valid',
                validators: {
                    stringLength: {
                        max: 8,
                        message: 'Zip Code must be less than 8 characters long'
                    }
                }
            },
            country_code_mobile: {
                message: 'Country Code Mobile is not valid',
                validators: {
                    regexp: {
                        regexp: /^[0-9]{1,5}$/,
                        message: 'Country Code Mobile must be between 1 and 5 digits long'
                    }
                }
            },
            state_code: {
                message: 'State Code is not valid',
                validators: {
                    notEmpty: {
                        message: 'State Code is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|99)$/,
                        message: 'State Code is not valid'
                    }
                }
            },
            country_code: {
                message: 'Country Code is not valid',
                validators: {
                    notEmpty: {
                        message: 'Country Code is required and cannot be empty'
                    }
                }
            },
        }
    });

    //Bank Details Form validations
    $('#createbankform').bootstrapValidator({
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        'Aadhaar_card_number': {
            message: 'AADHAAR No is not valid',
            validators: {
                notEmpty: {
                    message: 'AADHAAR No is required and cannot be empty'
                },
                regexp: {
                    regexp: /^\d{12}$/,
                    message: 'AADHAAR No must be exactly 12 digits'
                }
            }
        },
        // 'Aadhaar_enrollment_number': {
        //     message: 'AADHAAR Enrollment No is not valid',
        //     validators: {
        //         notEmpty: {
        //             message: 'AADHAAR Enrollment No is required and cannot be empty'
        //         },
        //         regexp: {
        //             regexp: /^\d{14}$/,
        //             message: 'AADHAAR Enrollment No must be exactly 14 digits'
        //         }
        //     }
        // },
        'bank_isfc_code[]': {
            message: 'IFSC Code is not valid',
            validators: {
                notEmpty: {
                    message: 'IFSC Code is required and cannot be empty'
                },
                regexp: {
                    regexp: /^[A-Z]{4}[0][A-Z0-9]{6}$/,
                    message: 'The IFSC Code must be 11 characters long with the format: XXXX0YYYYYY'
                }
            }
        },
        'bank_name[]': {
            message: 'Bank Name is not valid',
            validators: {
                notEmpty: {
                    message: 'Bank Name is required and cannot be empty'
                },
                stringLength: {
                    max: 125,
                    message: 'Bank Name must be less than 125 characters long'
                }
            }
        },
        'bank_acount_no[]': {
            message: 'Bank Account No is not valid',
            validators: {
                notEmpty: {
                    message: 'Bank Account No is required and cannot be empty'
                },
                regexp: {
                    regexp: /^[0-9]{1,20}$/,
                    message: 'Bank Account No must be up to 20 digits long'
                }
            }
        },
        'bank_acount_type[]': {
            message: 'Account Type is not valid',
            validators: {
                notEmpty: {
                    message: 'Account Type is required and cannot be empty'
                },
                regexp: {
                    regexp: /^(SB|CA|CC|OD|NRO|OTH)$/,
                    message: 'Bank Account Type mubs be '
                }
            }
        },
        'refund[]': {
            validators: {
                choice: {
                    min: 0,
                    max: 1,
                    message: 'Select valid refund option'
                }
            }
        }
    }
});   


    //Validation for Business income under 44ad
    $('#incomeUnder44ADForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'CodeAD[]': {
                message: 'The Nature of Business is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Nature of Business is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 7,
                        message: 'The Nature of Business code must be between 1 and 5 characters long'
                    },
                    regexp: {
                        regexp: /^(0\d{4}|[1-9]\d{4})(_\d)?$/, 
                        message: 'The Nature of Business code must be a 5-digit number'
                    }
                }
            },
            'NameOfBusinessAD[]': {
                message: 'The Name of Business is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Name of Business is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 75,
                        message: 'The Name of Business must be between 1 and 75 characters long'
                    }
                }
            },
            'descriptionAD[]': {
                message: 'The Description is not valid',
                validators: {
                    stringLength: {
                        max: 75,
                        message: 'The Description must be less than 75 characters long'
                    }
                }
            },
            'GrsTotalTrnOverInCash': {
                message: 'Revenue via Cash is not valid',
                validators: {
                    callback: {
                        message: 'Revenue via Cash must be a number between 0 and 30,000,000',
                        callback: function(value, validator, $field) {
                            // If value is empty, don't apply validation
                            if (value === '') {
                                return true;
                            }

                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);
                            return !isNaN(number) && number >= 0 && number <= 30000000;
                        }
                    }
                }
            },
            'GrsPrftInCash': {
                message: 'Profit via Cash is not valid',
                validators: {
                    callback: {
                        message: 'Profit via Cash must be a number between 0 and 30,000,000',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true; // Allow empty value
                            }

                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);

                            var revenue_cash = parseFloat($('input[name="GrsTotalTrnOverInCash"]').val().replace(/,/g, ''));

                            if(!isNaN(number) && number <= 0 && number >= 30000000){
                                return {
                                    valid: false,
                                    message: 'Profit via Cash must be a number between 0 and 30,000,000'
                                };
                            }else if(!isNaN(number) && number > revenue_cash){
                                return {
                                    valid: false,
                                    message: 'Profit via Cash must be a less than or equal to Revenue'
                                };
                            }

                            return true;
                        }
                    }
                }
            },
            'GrsTrnOverAnyOthMode': {
                message: 'Revenue via any other mode is not valid',
                validators: {
                    callback: {
                        message: 'Revenue via any other mode must be a number between 0 and 30,000,000',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true; // Allow empty value
                            }

                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);
                            return !isNaN(number) && number >= 0 && number <= 30000000;
                        }
                    }
                }
            },
            'GrsPrftOverAnyOthMode': {
                message: 'Profit via any other mode is not valid',
                validators: {
                    callback: {
                        message: 'Profit via any other mode must be a number between 0 and 30,000,000',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true; // Allow empty value
                            }

                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);
                            var revenue_cash = parseFloat($('input[name="GrsTrnOverAnyOthMode"]').val().replace(/,/g, ''));

                            if(!isNaN(number) && number <= 0 && number >= 30000000){
                                return {
                                    valid: false,
                                    message: 'Profit via any other mode must be a number between 0 and 30,000,000'
                                };
                            }else if(!isNaN(number) && number > revenue_cash){
                                return {
                                    valid: false,
                                    message: 'Profit via any other mode must be a less than or equal to Revenue'
                                };
                            }

                            return true;
                        }
                    }
                }
            },
            'GrsTrnOverBank': {
                message: 'Revenue via banking modes is not valid',
                validators: {
                    callback: {
                        message: 'Revenue via banking modes must be a number between 0 and 30,000,000',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true; // Allow empty value
                            }

                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);
                            return !isNaN(number) && number >= 0 && number <= 30000000;
                        }
                    }
                }
            },
            'GrsPrftOverBank': {
                message: 'Profit via banking modes is not valid',
                validators: {
                    callback: {
                        message: 'Profit via banking modes must be a number between 0 and 30,000,000',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true; // Allow empty value
                            }

                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);
                            var revenue_cash = parseFloat($('input[name="GrsTrnOverBank"]').val().replace(/,/g, ''));

                            if(!isNaN(number) && number <= 0 && number >= 30000000){
                                return {
                                    valid: false,
                                    message: 'Profit via banking modes must be a number between 0 and 30,000,000'
                                };
                            }else if(!isNaN(number) && number > revenue_cash){
                                return {
                                    valid: false,
                                    message: 'Profit via banking modes must be a less than or equal to Revenue'
                                };
                            }

                            return true;
                        }
                    }
                }
            }
        }
    })
    .on('success.form.bv', function (e) {
        // Custom validation for at least one pair of total and profit entered
        var isPairValid = false;
        $('#44ad_error_message').text("");
    
        // Check if at least one pair is entered
        if (($('input[name="GrsTotalTrnOverInCash"]').val() && $('input[name="GrsPrftInCash"]').val()) ||
            ($('input[name="GrsTrnOverAnyOthMode"]').val() && $('input[name="GrsPrftOverAnyOthMode"]').val()) ||
            ($('input[name="GrsTrnOverBank"]').val() && $('input[name="GrsPrftOverBank"]').val())) {
            isPairValid = true;
        }
    
        // If no pair is valid, prevent form submission
        if (!isPairValid) {
            $('#44ad_error_message').text("Please enter at least one valid pair of total transaction and profit.")
            e.preventDefault();  // Prevent form submission
            return false;
        }
    
        // Check if total fields have corresponding profit fields
        if (($('input[name="GrsTotalTrnOverInCash"]').val() && !$('input[name="GrsPrftInCash"]').val()) ||
            ($('input[name="GrsTrnOverAnyOthMode"]').val() && !$('input[name="GrsPrftOverAnyOthMode"]').val()) ||
            ($('input[name="GrsTrnOverBank"]').val() && !$('input[name="GrsPrftOverBank"]').val())) {
            $('#44ad_error_message').text("If you enter a total transaction, the corresponding profit field must also be filled.");
            e.preventDefault();  // Prevent form submission
            return false;
        }

    });

    //Validation for Business income under 44ada
    $('#incomeUnder44ADAForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'CodeADA[]': {
                message: 'The Nature of Business code is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Nature of Business code is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(0\d{4}|[1-9]\d{4})(_\d)?$/, 
                        message: 'The Nature of Business code must be a valid code from the predefined list'
                    },
                    stringLength: {
                        min: 5,
                        max: 7,
                        message: 'The Nature of Business code must be between 5 and 7 characters long'
                    }
                }
            },

            'NameOfBusinessADA[]': {
                message: 'The Name of Business is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Name of Business is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 75,
                        message: 'The Name of Business must be between 1 and 75 characters long'
                    }
                }
            },
            'descriptionADA[]': {
                message: 'The Description is not valid',
                validators: {
                    stringLength: {
                        max: 75,
                        message: 'The Description must be less than 75 characters long'
                    }
                }
            },
            'GrsTotalTrnOverInCash44ADA': {
                message: 'Revenue via Cash is not valid',
                validators: {
                    callback: {
                        message: 'Revenue via Cash must be a number between 0 and 7,500,000',
                        callback: function(value, validator, $field) {
                            value = value.replace(/,/g, ''); // Remove commas
                            // If value is empty, don't apply validation
                            if (value === '') {
                                return true;
                            }

                            var number = parseFloat(value);
                            return !isNaN(value) && number >= 0 && number <= 7500000;
                        }
                    }
                }
            },
            'GrsTrnOverAnyOthMode44ADA': {
                message: 'Revenue via any other mode is not valid',
                validators: {
                    callback: {
                        message: 'Revenue via any other mode must be a number between 0 and 7,500,000',
                        callback: function(value, validator, $field) {
                            value = value.replace(/,/g, ''); // Remove commas

                            // If value is empty, don't apply validation
                            if (value === '') {
                                return true;
                            }

                            var number = parseFloat(value);
                            return !isNaN(value) && number >= 0 && number <= 7500000;
                        }
                    }
                }
            },
            'GrsTrnOverBank44ADA': {
                message: 'Revenue via banking modes is not valid',
                validators: {
                    callback: {
                        message: 'Revenue via banking modes must be a number between 0 and 7,500,000',
                        callback: function(value, validator, $field) {
                            value = value.replace(/,/g, ''); // Remove commas

                            // If value is empty, don't apply validation
                            if (value === '') {
                                return true;
                            }

                            var number = parseFloat(value);
                            return !isNaN(value) && number >= 0 && number <= 7500000;
                        }
                    }
                }
            },
            'TotPersumptiveInc44ADA': {
                message: 'Total income is not valid',
                validators: {
                    notEmpty: {
                        message: 'Total income is required'
                    },
                    callback: {
                        message: 'Total income must be a number between 0 and 9,999,999,999',
                        callback: function(value, validator, $field) {
                            value = value.replace(/,/g, ''); // Remove commas
                            var number = parseFloat(value);
                            var revenue_sum = (parseFloat($('input[name="GrsTotalTrnOverInCash44ADA"]').val().replace(/,/g, '')) || 0) + (parseFloat($('input[name="GrsTrnOverAnyOthMode44ADA"]').val().replace(/,/g, '')) || 0) + (parseFloat($('input[name="GrsTrnOverBank44ADA"]').val().replace(/,/g, '')) || 0);
                            
                            if(isNaN(value) && number <= 0 && number >= 9999999999){
                                return {
                                    valid: false,
                                    message: 'Total income must be a number between 0 and 9,999,999,999'
                                }; 
                            }else if(number > revenue_sum){
                                return {
                                    valid: false,
                                    message: 'Total income cannot be greater than Gross Revenue.'
                                }; 
                            }else if(number < revenue_sum/2){
                                return {
                                    valid: false,
                                    message: 'Total income cannot be less than 50% of Gross Revenue.'
                                }; 
                            }

                            return true;
                        }
                    }
                }
            }
        }
    })
    .on('success.form.bv', function (e) {

        $('#44ada_error_message').text("");
    
        // Check if at least one value is entered
        if ($('input[name="GrsTotalTrnOverInCash44ADA"]').val() == '' && $('input[name="GrsTrnOverAnyOthMode44ADA"]').val() == '' && $('input[name="GrsTrnOverBank44ADA"]').val() == '') {
            $('#44ada_error_message').text("Please enter revenue from at least one source.")
            e.preventDefault();  // Prevent form submission
            return false;
        }

    });

    //Validation for Business income under 44ae
    $('#incomeUnder44AEForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'codeAE[]': {
                message: 'The Nature of Business code is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Nature of Business code is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(08001|11002|11008|11010|11011|11012|11015)$/,
                        message: 'The Nature of Business code must be one of the predefined codes'
                    },
                    stringLength: {
                        min: 5,
                        max: 5,
                        message: 'The Nature of Business code must be exactly 5 characters long'
                    }
                }
            },
            'NameOfBusinessAE[]': {
                message: 'The Name of Business is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Name of Business is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 75,
                        message: 'The Name of Business must be between 1 and 75 characters long'
                    }
                }
            },
            'descriptionAE[]': {
                message: 'The Description is not valid',
                validators: {
                    stringLength: {
                        max: 75,
                        message: 'The Description must be less than 75 characters long'
                    }
                }
            },
            'RegNumberGoodsCarriage[]': {
                message: 'Registration Number is not valid',
                validators: {
                    notEmpty: {
                        message: 'Registration Number is required'
                    },
                    stringLength: {
                        min: 1,
                        max: 11,
                        message: 'Registration Number must be between 1 and 11 characters long'
                    }
                }
            },
            'TonnageCapacity[]': {
                message: 'Tonnage Capacity is not valid',
                validators: {
                    notEmpty: {
                        message: 'Tonnage Capacity is required'
                    },
                    numeric: {
                        message: 'Tonnage Capacity must be a number'
                    },
                    between: {
                        min: 0,
                        max: 100,
                        message: 'Tonnage Capacity must be between 0 and 100'
                    }
                }
            },
            'HoldingPeriod[]': {
                message: 'Holding Period is not valid',
                validators: {
                    notEmpty: {
                        message: 'Holding Period is required'
                    },
                    integer: {
                        message: 'Holding Period must be an integer'
                    },
                    between: {
                        min: 1,
                        max: 12,
                        message: 'Holding Period must be between 1 and 12'
                    }
                }
            },
            'OwnedLeasedHiredFlag[]': {
                message: 'Ownership status is not valid',
                validators: {
                    notEmpty: {
                        message: 'Ownership status is required'
                    },
                    choice: {
                        values: ['OWN', 'LEASE', 'HIRED'],
                        message: 'Ownership status must be either OWN, LEASE, or HIRED'
                    }
                }
            },
            'PresumptiveIncome[]': {
                message: 'Presumptive Income is not valid',
                validators: {
                    notEmpty: {
                        message: 'Presumptive Income is required'
                    },
                    callback: {
                        message: 'Profit via any other mode must be a number between 7,500 and 99,999,999,999,999',
                        callback: function(value, validator, $field) {
                            value = value.replace(/,/g, '');
                            var number = parseFloat(value);
                            return !isNaN(value) && number >= 7500 && number <= 99999999999999;
                        }
                    },
                }
            }
        }
    });

    $('#directorshipForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'company_name[]': {
                message: 'The Name of Company is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Name of Company is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 125,
                        message: 'The Name of Company must be between 1 and 125 characters long'
                    }
                }
            },
            'company_type[]': {
                message: 'The Company Type is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Company Type is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(D|F)$/,
                        message: 'The Company Type must be either Domestic (D) or Foreign (F)'
                    }
                }
            },
            'company_pan[]': {
                message: 'The PAN of Company is not valid',
                validators: {
                    notEmpty: {
                        message: 'The PAN of Company is required'
                    },
                    regexp: {
                        regexp: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                        message: 'The PAN of Company must be in the format XXXXX0000X'
                    }
                }
            },
            'share_type[]': {
                message: 'The Shares Types is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Shares Types is required and cannot be empty'
                    },
                    regexp: {
                        regexp: /^(L|U)$/,
                        message: 'The Shares Types must be either Listed (L) or Unlisted (U)'
                    },
                }
            },
            'din[]': {
                message: 'The DIN is not valid',
                validators: {
                    notEmpty: {
                        message: 'The DIN is required'
                    },
                    regexp: {
                        regexp: /^[0-9]{8}$/,
                        message: 'The DIN must be exactly 8 digits long'
                    }
                }
            }
        }
    });
    
    $('#shceduleSpiForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'spi_name_of_person[]': {
                message: 'The Specified Person Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Specified Person Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 125,
                        message: 'The Specified Person Name must be between 1 and 125 characters long'
                    }
                }
            },
            'spi_pan_of_person[]': {
                message: 'The PAN of Person is not valid',
                validators: {
                    notEmpty: {
                        message: 'The PAN of Person is required'
                    },
                    regexp: {
                        regexp: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                        message: 'The PAN of Person must be in the format XXXXX0000X'
                    }
                }
            },
            'spi_aaadhaar_of_person[]': {
                message: 'The Aadhaar of Person is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Aadhaar of Person is required'
                    },
                    regexp: {
                        regexp: /^[0-9]{12}$/,
                        message: 'The Aadhaar of Person must be exactly 12 digits long'
                    }
                }
            },
            'spi_relationship[]': {
                message: 'The Relationship is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Relationship is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 50,
                        message: 'The Relationship must be between 1 and 50 characters long'
                    }
                }
            },
            'spi_amount[]': {
                message: 'The Amount is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Amount is required'
                    },
                    numeric: {
                        message: 'The Amount must be a number'
                    },
                    callback: {
                        message: 'The Amount must be between -99999999999999 and 99999999999999',
                        callback: function(value, validator, $field) {
                            if (value === '') {
                                return true; // Allow empty values if you have `notEmpty` validator
                            }
                            var intValue = parseInt(value, 10);
                            return intValue >= -99999999999999 && intValue <= 99999999999999;
                        }
                    }
                }
            },
            'spi_head_of_income[]': {
                message: 'The Head of Income is not valid',
                validators: {
                    notEmpty: {
                        message: 'The Head of Income is required'
                    },
                    regexp: {
                        regexp: /^(SA|HP|CG|OS|EI)$/,
                        message: 'The Head of Income must be one of SA, HP, CG, OS, EI'
                    }
                }
            }
        }
    });
    
    //Director Form Validations
    $('#directorForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
            message: 'The first name is not valid',
                validators: {
                    stringLength: {
                        max: 25,
                        message: 'The first name less than 25 characters long'
                    }
                }
            },
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
            pan_number: {
                message: 'Pan is not valid',
                validators: {
                notEmpty: {
                    message: 'Pan is required and cannot be empty'
                },
                regexp: {
                    regexp: /^([A-Z]{5}[0-9]{4}[A-Z])$/,
                    message: 'PAN is not valid'
                }
                }
            },
            date_of_birth: {
                message: 'Date of Birth is not valid',
                validators: {
                notEmpty: {
                    message: 'Date of Birth is required and cannot be empty'
                },
                regexp: {
                    regexp: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/,
                    message: 'Date of Birth is not valid'
                }
                }
            },
        }
      })
});

