"use client";
import React from 'react';
import Image from "next/image";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/Input';
import CustomButton from '@/components/CustomButton';
import { sendForm } from '@/services/ContactUsService';
import {showNotificationError, showNotificationSuccess} from '@/components/NotificationToast'

const ContactUs = () => {

  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const handleSendForm = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await sendForm(values);
      
      if (response.success) {
        showNotificationSuccess('Message sent successfully');
        resetForm();
      }
    } catch (error) {
      showNotificationError('Unexpected error', error.message);
    } finally {
      setSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: formValidationSchema,
    onSubmit: handleSendForm
  });
  
  return (
    <section className='my-10'>
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex items-center flex-col justify-center px-10 my-10">
            <div className="w-full">
              <h4 className="text-primary text-base font-medium leading-6 mb-4 lg:text-left text-center">Contact Us</h4>
              <h2 className="text-primary font-manrope text-4xl font-semibold mb-3 text-center">Send Us A Message</h2>
              <p className="text-tertiary text-lg font-normal leading-7 mb-6 text-center">Want to connect? Send us a message!</p>
            </div>
            <div className="flex flex-col items-center gap-5 bg-primary rounded-full justify-center w-52 lg:w-72 aspect-square">
              <Image src="/icon.svg" alt="Logo"  />
              <h2 className="text-white font-manrope text-2xl font-semibold lg:text-left text-center">Gloobcamp</h2>
            </div>
          </div>
          <div className="flex items-center lg:mb-0 mb-10 px-10">
            <div className="w-full">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-600">{formik.errors.name}</div>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className='mt-8'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-600">{formik.errors.email}</div>
                  )}
                </div>
                <div>
                  <textarea
                    id="text"
                    name="message"
                    className="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-text-400 text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none px-4 py-4 mt-8"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-600">{formik.errors.message}</div>
                  )}
                </div>
                <CustomButton className='mt-8' purple text="Submit" type="submit" disabled={!formik.isValid || formik.isSubmitting} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
