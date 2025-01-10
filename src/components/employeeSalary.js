/*
********************************************************
-------------------- Employee Salary---------------------
*********************************************************
*/

function initializrSalaryTabs(){
    $('.tab-content').addClass('d-none');
    $('.tab-content').first().removeClass('d-none');

    $('.emp_name').each(function() {
          var $tabIndex = $(this).closest('.tab-content').attr('data-tab');
         
          var $selectedElement = $('.salary_tabs').find('[data-index="' + $tabIndex + '"]');
          if (! $(this).val().trim()){
              $selectedElement.find('button').text(`Employee ${ parseInt($tabIndex) + 1 }`);
          }

          $(this).on('input', function() {
              $selectedElement.find('button').text($(this).val().trim()? $(this).val().trim() : `Employee ${parseInt($tabIndex) + 1 }` );
          });
      });

      $('.tab-btn').each(function() {
          var $btn = $(this);
          var $tabIndex = $(this).closest('.tab-btn').attr('data-index');
          $btn.on('click focus', function() {
              $('.tab-btn').removeClass('active');
              $btn.addClass('active');
              $('.underline').css({
                  width: $btn.outerWidth(),
                  left: $btn.position().left
              });
              
              $('.tab-content').addClass('d-none');
              $('.tab-content[data-tab="' + $tabIndex + '"]').removeClass('d-none');
          });
      });
}

function activeSalaryTab($tabIndex = 0){
    var $tabBtn = $('.salary_tabs').find('[data-index="' + $tabIndex + '"]');
    $('.tab-btn').removeClass('active');
    $tabBtn.addClass('active');
    $('.underline').css({
        width: $tabBtn.outerWidth(),
        left: $tabBtn.position() ? $tabBtn.position().left : 0
    });
}

function updateSalaryItemsIndex(){
    var lst = [];
    $('.tab-content').each(function(){
        lst.push( $(this).attr('data-tab'));
    });

    $('.salary_form').find('input[name="tab"]').val(lst);
}

let dataIndexToRemove;

function removeSalary($dataIndex = null){
    if($dataIndex!== null){
        if ($('.salary_tabs').find('.salary-tab-button').length >1 && $('.tab-body').find('.tab-content').length > 1){
            $('.tab-btn[data-index="' + $dataIndex + '"]').remove();
            $('.tab-content[data-tab="' + $dataIndex + '"]').remove();
            $('.tab-content').last().removeClass('d-none')
            activeSalaryTab($('.tab-content').last().attr('data-tab'));
        }else{
            
            $('.tab-content[data-tab="' + $dataIndex + '"]').find('input, select').val("");
        }
    }
    updateSalaryItemsIndex();
}

//Salary tab functionality
$(function(){
    let GLOBAL_SALARY_COUNTER = $('.salary-tab-button').length ;
    $('.tab-btn-add-salary').on('click', function() {
      var $cloneSalBody = $('.tab-content').first().clone();
      var $cloneSalTab = $('.salary_tabs').find('.tab-btn').first().clone();
      $cloneSalBody.attr('data-tab', GLOBAL_SALARY_COUNTER);
      $cloneSalBody.find('input, select').val('');
      $cloneSalTab.attr('data-index', GLOBAL_SALARY_COUNTER);
      var $delTab = $cloneSalTab.find('.remove-salary')
      $delTab.attr('data-index', GLOBAL_SALARY_COUNTER);

      $cloneSalBody.find('input, select').each(function() {
        let regex = /tabs\[(\d+)\]/;
        let $this = $(this);
        let name = $this.attr('name');
        if(name){

            let oldNumberMatch = name.match(regex);
            if (oldNumberMatch) {
                let newName = name.replace(regex, 'tabs[' + GLOBAL_SALARY_COUNTER + ']');
                $this.attr('name', newName);
            }
        }
      });

      $cloneSalBody.find('select').each(function() {
        let attr = $(this).attr('data-tab');
        if(attr !== undefined){
            $(this).attr('data-tab',GLOBAL_SALARY_COUNTER);
        }
      });


      var $tabUnderlines = $('.salary_tabs').find('.underline');
      $cloneSalTab.insertBefore($tabUnderlines);
      $('.tab-body').append($cloneSalBody);
      
      //Accordation toggle added
      ($('.tab-content[data-tab="' + GLOBAL_SALARY_COUNTER + '"]').find('.accordion-item-header')).on('click', function() {
        if($('.accordion-item').not($(this).closest('.accordion-item')).hasClass('open')){
            $('.accordion-item').not($(this).closest('.accordion-item')).removeClass('open');
        }
        $(this).closest('.accordion-item').toggleClass('open');
      });
      activeSalaryTab(GLOBAL_SALARY_COUNTER);
      
      initializrSalaryTabs();

        $('.remove-salary').on('click', function() {
            dataIndexToRemove = $(this).data('index');
        });

        updateSalaryItemsIndex();
        $('.tab-content').addClass('d-none');
        $('.tab-content[data-tab="' + GLOBAL_SALARY_COUNTER + '"]').removeClass('d-none');
        $('.salary_form_submit').val('Submit');


        var option_id = $('.removeOthIncome').closest('.row').find('#option_id').val();
        $('.removeOthIncome').closest('.form_grid_acor').find('.other_select').find('option[value="' + option_id + '"]').removeClass('d-none');
        $('.removeOthIncome').closest('.row').remove();
        $('.sal-type').val("1");
        GLOBAL_SALARY_COUNTER++;
    });
});

//Initialize salary
$(function(){
    $('.remove-salary').on('click', function() {
        dataIndexToRemove = $(this).data('index');
    });

    activeSalaryTab(0);
    initializrSalaryTabs();

    $('.accordion-item-header').on('click', function() {
        if($('.accordion-item').not($(this).closest('.accordion-item')).hasClass('open')){
            $('.accordion-item').not($(this).closest('.accordion-item')).removeClass('open');
        }
        $(this).closest('.accordion-item').toggleClass('open');
    });

    $('#confirmDelete').on('click', function() {
        if (dataIndexToRemove !== undefined) {
            removeSalary(dataIndexToRemove);
        }
    });

    updateSalaryItemsIndex();
});


/*
********************************************************
xxxxxxxxxxxxxxxxxxxxx Employee Salary xxxxxxxxxxxxxxxxxxxxx 
*********************************************************
*/