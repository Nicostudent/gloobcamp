"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/Input";
import CustomButton from "@/components/CustomButton";
import { sendForm } from "@/services/ContactUsService";
import {
  showNotificationError,
  showNotificationSuccess,
} from "@/components/NotificationToast";

const ContactUs = () => {
  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSendForm = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await sendForm(values);

      if (response.success) {
        showNotificationSuccess("Message sent successfully");
        resetForm();
      }
    } catch (error) {
      showNotificationError("Unexpected error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: handleSendForm,
  });

  return (
    <section className="md:flex md:justify-center md:items-center space-y-4 py-24 h-screen text-center">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center my-10 px-10">
            <div className="w-full">
              <h4 className="mb-4 font-medium text-base text-center text-primary lg:text-left leading-6">
                Contact Us
              </h4>
              <h2 className="mb-3 font-manrope font-semibold text-4xl text-center text-primary">
                Send Us A Message
              </h2>
              <p className="mb-6 font-normal text-center text-lg text-tertiary leading-7">
                Want to connect? Send us a message!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 bg-primary rounded-full w-52 lg:w-72 aspect-square">
              <Image src="/icon.svg" alt="Logo" width={100} height={100} />
              <h2 className="font-manrope font-semibold text-2xl text-center text-white lg:text-left">
                Gloobcamp
              </h2>
            </div>
          </div>
          <div className="flex items-center mb-10 lg:mb-0 px-10">
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
                    className="mt-8"
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
                    className="border-gray-200 shadow-sm mt-8 px-4 py-4 border rounded-xl w-full h-48 font-normal placeholder-text-400 text-gray-600 text-lg leading-7 resize-none focus:outline-none"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-600">{formik.errors.message}</div>
                  )}
                </div>
                <CustomButton
                  className="mt-8"
                  purple
                  text="Submit"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
