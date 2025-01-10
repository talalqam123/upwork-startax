<div class="card card-body">
            <div class="pt-3 pb-1 p-tab-c1">
              <span> Gross Salary</span>
            </div>

            <div class="row">
              <div class="accordion col-md-9">
                <div class="accordion-item form mw-100">
                  <div class="accordion-item-header">
                    <span class="text-content">Salary Details As per 17(1)</span>
                    <div class="col-md-4 d-flex pr-0">
                      {% if previous_client_salary_details %}
                          {% with details=previous_client_salary_details|get_index_item:0 %}
                              {% with total_salary=details.Salary.total|default:"-" %}
                                  <p class="text-red col-md-3 m-0" style="font-size:12px;">{{ total_salary|get_indian_currency }}</p>
                              {% endwith %}
                          {% endwith %}
                      {% else %}
                          <p class="text-red col-md-3 m-0" style="font-size:12px;">-</p>
                      {% endif %}
                      <input type="text" class="form-control col-md-9 rounded-0 total_salary inr_field text-content"
                        name="tabs[0][total_salary]" readonly />
                    </div>
                  </div>
                  <div class="accordion-item-description-wrapper pr-2">
                    <div class="accordion-item-description">
                      <div class="form_grid_acor">

                        <div class="form-group row ml-3 justify-content-between">
                          <input type="hidden" class="sal-type" value="1" name="tabs[0][salary_type][]" />
                          <span class="col-md-6 text-content">Basic Salary</span>
                          <div class="col-md-4 d-flex pr-0">
                            {% if previous_client_salary_details %}
                                {% with details=previous_client_salary_details|get_index_item:0 %}
                                    {% with prev_value=details.Salary.NatureOfSalaryDtlsType|amount_by_type:1|default:"-" %}
                                        <p class="text-red col-md-3 m-0" style="font-size:12px;">{{ prev_value|get_indian_currency }}</p>
                                    {% endwith %}
                                {% endwith %}
                            {% else %}
                                <p class="text-red col-md-3 m-0" style="font-size:12px;">-</p>
                            {% endif %}
                            <div class="col-md-9 pr-0">
                              <input type="text" class="form-control rounded-0 salary_amount inr_field"   
                                name="tabs[0][salary_amount][]" />
                            </div>
                          </div>
                        </div>

                        <div
                          class="form-group row ml-3 justify-content-between add_salary_div">
                          <select class="form-control col-md-5 other_select text-content"
                            id="OtherSalariesList" data-tab="0">
                            <option>Select Additional Details</option>
                            <option value="2">Dearness Allowance</option>
                            <option value="3">Conveyance Allowance</option>
                            <option value="4">House Rent Allowance</option>
                            <option value="5">Leave Travel Allowance</option>
                            <option value="6">Children Education Allowance</option>
                            <option value="OTH">Others</option>
                          </select>
                          <div class="col-md-4 d-flex justify-content-end pr-0">
                            <input type="text" class="form-control rounded-0 col-md-9"
                              disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item form mw-100">
                  <div class="accordion-item-header">
                    <span>Perquisites Value u/s 17(2)</span>
                    <div class="col-md-4 d-flex pr-0">
                      {% if previous_client_salary_details %}
                          {% with details=previous_client_salary_details|get_index_item:0 %}
                              {% with prev_value=details.Perquisites.total|default:"-" %}
                                  <p class="text-red col-md-3 m-0" style="font-size:12px;">{{ prev_value|get_indian_currency }}</p>
                              {% endwith %}
                          {% endwith %}
                      {% else %}
                          <p class="text-red col-md-3 m-0" style="font-size:12px;">-</p>
                      {% endif %}
                      <input type="text"
                        class="form-control col-md-9 rounded-0 total_perquisites col-md-4 inr_field"   
                        name="tabs[0][total_perquisites]" readonly />
                    </div>
                  </div>
                  <div class="accordion-item-description-wrapper pr-2">
                    <div class="accordion-item-description">
                      <div class="form_grid_acor">
                        <div
                          class="form-group row ml-3 justify-content-between add_perquisites_div">
                          <select class="form-control col-md-5 other_select  text-content"
                            id="OtherPerquisitesList" data-tab="0">
                            <option value="">Select Additional Details</option>
                            <option value="1">Accommodation</option>
                            <option value="2">Cars / Other Automotive</option>
                            <option value="3">Sweeper, gardener, watchman or personal
                              attendant
                            </option>
                            <option value="4">Gas, electricity, water</option>
                            <option value="5">Interest free or concessional loans</option>
                            <option value="6">Holiday expenses</option>
                            <option value="7">Free or concessional travel</option>
                            <option value="8">Free meals</option>
                            <option value="9">Free education</option>
                            
                            <option value="10">Stock options allotted or transferred by
                              employer
                              being an eligible start-up referred to in section 80-IAC-Tax not
                              to be deferred</option>
                            <option value="OTH">Other benefits or amenities</option>
                          </select>
                          <div class="col-md-4 d-flex justify-content-end pr-0">
                            <input type="text" class="form-control rounded-0 col-md-9"
                              disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item form mw-100">
                  <div class="accordion-item-header">
                    <span>Profits in lieu of Salary u/s 17(3)</span>
                    <div class="col-md-4 d-flex pr-0">
                      {% if previous_client_salary_details %}
                          {% with details=previous_client_salary_details|get_index_item:0 %}
                              {% with prev_value=details.Profit.total|default:"-" %}
                                  <p class="text-red col-md-3 m-0" style="font-size:12px;">{{ prev_value|get_indian_currency }}</p>
                              {% endwith %}
                          {% endwith %}
                      {% else %}
                          <p class="text-red col-md-3 m-0" style="font-size:12px;">-</p>
                      {% endif %}
                      <input type="text"
                        class="form-control col-md-9 rounded-0 total_profit col-md-4 inr_field"   
                        name="tabs[0][total_profits]" readonly />
                    </div>
                  </div>
                  <div class="accordion-item-description-wrapper pr-2">
                    <div class="accordion-item-description">
                      <div class="form_grid_acor">
                        <div
                          class="form-group row ml-3 justify-content-between add_profit_div">
                          <select class="form-control col-md-5 other_select  text-content"
                            id="OtherProfitsList" data-tab="0">
                            <option value="">Select Additional Details</option>
                            <option value="1">Compensation due/received by an assessee from
                              his
                              employer or former employer in connection with the termination
                              of his employment or modification thereto</option>
                            <option value="2">Any payment due/received by an assessee from his
                              employer or a former employer or from a provident or other fund,
                              sum received under Keyman Insurance Policy including Bonus
                              thereto</option>
                            <option value="3">Any amount due/received by assessee from any
                              person before joining or after cessation of employment with that
                              person</option>
                            <option value="OTH">Any Other</option>
                          </select>
                          <div class="col-md-4 d-flex justify-content-end pr-0">
                            <input type="text" class="form-control rounded-0 col-md-9"
                              disabled />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>