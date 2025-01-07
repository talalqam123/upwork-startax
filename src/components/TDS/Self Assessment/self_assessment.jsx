import React, { useState } from 'react';
import moment from 'moment';
import InputMask from 'react-input-mask';

const SelfAssessment = () => {
  const [taxPayments, setTaxPayments] = useState([
    {
      bsrCode: '',
      challanSrNo: '',
      paymentDate: moment().format('DD/MM/YYYY'),
      amount: '',
    },
  ]);

  const handleAddPayment = () => {
    setTaxPayments([
      ...taxPayments,
      {
        bsrCode: '',
        challanSrNo: '',
        paymentDate: moment().format('DD/MM/YYYY'),
        amount: '',
      },
    ]);
  };

  const handleDeletePayment = (index) => {
    const updatedPayments = taxPayments.filter((_, i) => i !== index);
    setTaxPayments(updatedPayments);
  };

  const handleInputChange = (index, field, value) => {
    const updatedPayments = [...taxPayments];
    updatedPayments[index][field] = value;
    setTaxPayments(updatedPayments);
  };

  const formatInput = (value) => {
    return value
      .replace(/^\d\d(\d)$/g, '$1/$2')
      .replace(/^\d\d\/\d\d(\d+)$/g, '$1/$2')
      .replace(/[^\d\/]/g, '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Submitted:', taxPayments);
  };

  return (
    <div className="pt-3">
      <strong>Taxes Paid</strong>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="card card-body text-content">
          <div className="self_assesment_div">
            {taxPayments.map((payment, index) => (
              <div className="row mt-3" key={index}>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>BSR Code</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={payment.bsrCode}
                      onChange={(e) =>
                        handleInputChange(index, 'bsrCode', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-group">
                    <label>Challan Sr No</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      value={payment.challanSrNo}
                      onChange={(e) =>
                        handleInputChange(index, 'challanSrNo', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-group">
                    <label>Date of Payment</label>
                    <InputMask
                      mask="99/99/9999"
                      maskChar={null}
                      className="form-control rounded-0"
                      value={payment.paymentDate}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          'paymentDate',
                          formatInput(e.target.value)
                        )
                      }
                      onBlur={(e) => {
                        if (!moment(e.target.value, 'DD/MM/YYYY', true).isValid()) {
                          alert('Invalid Date');
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <div className="form-group">
                    <label>Amount Paid</label>
                    <input
                      type="number"
                      className="form-control rounded-0"
                      value={payment.amount}
                      onChange={(e) =>
                        handleInputChange(index, 'amount', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-2 d-flex form-group align-items-end">
                  {taxPayments.length > 1 && (
                    <button
                      className="btn btn-sm btn-danger delete_tax_payment"
                      type="button"
                      onClick={() => handleDeletePayment(index)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-info add_tax_payment"
            style={{width: "fit-content"}}
            type="button"
            onClick={handleAddPayment}
          >
            Add More
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              style={{width: "fit-content"}}
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelfAssessment;
