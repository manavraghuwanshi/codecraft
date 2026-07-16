import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import './checkout.css'

export default function Checkout() {

    const[shippingMethod ,setShippingMethod] = useState('free');
    const[paymentMethod ,setPaymentMethod] = useState('cash');

    const validationSchema = Yup.object({
        firstName: Yup.string().required('first name is required'),
        lastName: Yup.string().required('last name is required'),
        addressLine1: Yup.string().required('Address line 1 is required'),
        addressLine2: Yup.string().required('Address line 1 is required'),
        city: Yup.string().required('city is required'),
        state: Yup.string().required('state is required'),
        country: Yup.string().required('country is required'),
        postalCode: Yup.string().required('pastal code is required'),
        number: Yup.string().required("Mobile number is required")
                    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number"),
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            country: "",
            postalCode: ""

        },
        validationSchema,
        onSubmit: (values) => {
            console.log("formik values are:", values)
        }
    })

    return (
        <>
            
            <form onSubmit={formik.handleSubmit}>
                <h2>Shipping Address</h2>
                <div className="customer-name">
                   <div>
                     <label>
                        first name
                        <input
                            type="text"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.firstName && formik.errors.firstName && (
                        <p className='error-message'>{formik.errors.firstName}</p>
                    )}
                   </div>

                    <div>
                        <label>
                        last name
                        <input
                            type="text"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.lastName && formik.errors.lastName && (
                        <p className='error-message'>{formik.errors.lastName}</p>
                    )}
                    </div>
                     <div>
                        <label>
                        Mobile number
                        <input
                            type="number"
                            name="number"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.number && formik.errors.number && (
                        <p className='error-message'>{formik.errors.number}</p>
                    )}
                    </div>
                </div>

                <div className='addressLine'>
                    <div >

                  <label>Address line 1
                   <input
                     type="text"
                     name='addressLine1'
                     value={formik.values.addressLine1}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                  </label>
                  {formik.touched.addressLine1 && formik.errors.addressLine1 && (
                    <p className='error-message'>{formik.errors.addressLine1}</p>
                  )}
                </div>
                <div>

                  <label>Address line 2
                   <input
                     type="text"
                     name='addressLine2'
                     value={formik.values.addressLine2}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                  </label>
                  {formik.touched.addressLine2 && formik.errors.addressLine2 && (
                    <p className='error-message'>{formik.errors.addressLine2}</p>
                  )}
                </div>
                </div>

               
                 <div className='city-state'>

                  <div>
                    <label>city
                   <input
                     type="text"
                     name='city'
                     value={formik.values.city}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                  </label>
                  {formik.touched.city && formik.errors.city && (
                    <p className='error-message'>{formik.errors.city}</p>
                  )}

                  </div>
                  <div>
                    <label>state
                   <input
                     type="text"
                     name='state'
                     value={formik.values.state}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                  </label>
                  {formik.touched.state && formik.errors.state && (
                    <p className='error-message'>{formik.errors.state}</p>
                  )}
                  </div>

                  <div>
                    <label>Country
                   <input
                     type="text"
                     name='country'
                     value={formik.values.country}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                  </label>
                  {formik.touched.country && formik.errors.country && (
                    <p className='error-message'>{formik.errors.country}</p>
                  )}
                  </div>

                  <div>
                    <label>Postal Code
                   <input
                     type="text"
                     name='postalCode'
                     value={formik.values.postalCode}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                  </label>
                  {formik.touched.postalCode && formik.errors.postalCode && (
                    <p className='error-message'>{formik.errors.postalCode}</p>
                  )}
                  </div>
                </div>

                <h2>Shipping Method</h2>

               <div className='shipping-method'>
                 <div >
                    <label >free(receive in 5-7 days)
                    <input
                     type="radio"
                      name="shippingMethod" 
                      id="free" 
                      value = 'free'
                      checked = {shippingMethod === 'free'}
                      onChange={(e)=> setShippingMethod(e.target.value)}
                      />
                  </label>
                  </div>
                 <div>
                    <label >Express(receive in 2-3 days)
                    <input
                     type="radio"
                      name="shippingMethod" 
                      id="express" 
                      value = 'express'
                      checked = {shippingMethod === 'express'}
                      onChange={(e)=> setShippingMethod(e.target.value)}
                      />
                   </label>
                </div>

               </div>
                 <h2>Shipping Method</h2>

                <div className='payment-method'>
                  <label >cash
                    <input
                     type="radio"
                      name="paymentMethod" 
                      id="cash" 
                      value = 'cash'
                      checked = {paymentMethod === 'cash'}
                      onChange={(e)=> setPaymentMethod(e.target.value)}
                      />
                  </label>
                  <label >card
                    <input
                     type="radio"
                      name="paymentMethod" 
                      id="card" 
                      value = 'card'
                      checked = {paymentMethod === 'card'}
                      onChange={(e)=> setPaymentMethod(e.target.value)}
                      />
                  </label>
                  <label >upi
                    <input
                     type="radio"
                      name="paymentMethod" 
                      id="upi" 
                      value = 'upi'
                      checked = {paymentMethod === 'upi'}
                      onChange={(e)=> setPaymentMethod(e.target.value)}
                      />
                  </label>
                </div>

                <button type='submit'>continue</button>
                

            </form>
        </>
    );
}