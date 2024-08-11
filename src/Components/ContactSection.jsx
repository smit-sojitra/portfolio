
// export default ContactSection
import React, { useState, useEffect } from 'react'
import Animation from './Animation'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { userValidation } from '../validations/userValidation'
import { toast, Slide, Zoom, ToastContainer } from 'react-toastify'
const ContactSection = () => {
    const [isloading, setIsloading] = useState(false)
    const baseUrl = import.meta.env.VITE_BASE_URL
    const url = baseUrl + "/send"
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userValidation),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            description: ''
        }
    })

    useEffect(() => {
        if (errors.firstName && errors.lastName && errors.contactNumber && errors.email && errors.description) {
            console.log('if')
            toast.error('All fields are required', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: '',
                transition: Zoom,
                theme: "light",
            });
        } else {
            if (errors.firstName) {
                toast.error(errors.firstName.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: '',
                    transition: Slide,
                    theme: "light",
                });
            }
            if (errors.lastName) {
                toast.error(errors.lastName.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: '',
                    transition: Slide,
                    theme: "light",
                });
            }
            if (errors.email) {
                toast.error(errors.email.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: '',
                    transition: Slide,
                    theme: "light",
                });
            }
            if (errors.contactNumber) {
                toast.error(errors.contactNumber.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: '',
                    transition: Slide,
                    theme: "light",
                });
            }
            if (errors.description) {
                toast.error(errors.description.message, {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: '',
                    transition: Slide,
                    theme: "light",
                });
            }
        }

    }, [errors]);

    const onSubmit = async (data) => {
        setIsloading(true)
        try {
            const res = await axios.post(url, { data: data }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1500));
            toast.promise(
                resolveAfter3Sec,
                {
                    pending: 'Sending Message...',
                    success: 'Message sent successfully',
                }
            )
            setTimeout(() => {
                setIsloading(false);
            }, 1500);
            reset();
        } catch (error) {
            console.log('err', error)
        }
    }

    return (
        <div className="contactus-form-container min-h-screen pt-20 pb-44" id="Contact Me">
            <div className='flex jc items-center flex-col justify-center h-screen'>

                <Animation>
                    <p className="contactus-heading text-[clamp(40px,5vw,80px)]">Get in touch</p>
                </Animation>
                <Animation>
                    <p className="contactus-subHeading text-[clamp(20px,5vw,48px)]">Questions, thoughts or just want to say hello?</p>
                </Animation>
                <div className="form-container-img mt-10 w-full flex justify-center items-center">
                    <Animation>
                        <form onSubmit={handleSubmit(onSubmit)} className="form" action="">
                            <div className="formfield-container justify-center items-center width-full">
                                <Animation >
                                    <img src="../src/assets/contact-img.svg" className='img pb-16 hidden lg:block' alt="" />
                                </Animation>
                                <div className='form-container w-full sm:w-[80%] lg:max-w-[42%]'>
                                    <Animation>
                                        <div className='input'>
                                            <input {...register('firstName')} className="formfield" type="text" name="firstName" id="" placeholder="First Name" />
                                            <input {...register('lastName')} className="formfield" type="text" name="lastName" id="" placeholder="Last Name" />
                                        </div>
                                    </Animation>
                                    <Animation>
                                        <div className='input'>
                                            <input {...register('email')} className="formfield" type="email" name="email" id="" placeholder="Email address" />
                                            <input {...register('contactNumber')} className="formfield" type='text' name="contactNumber" id="" placeholder="Contact No." />
                                        </div>
                                    </Animation>
                                    <Animation>
                                        <div className='text-area'>
                                            <textarea  {...register('description')} className="formfield formfield-textarea" name="description" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                    </Animation>
                                    <Animation>
                                        <button type='submit' className={`${isloading ? 'aboutBtn' : ''}`}>
                                            <div className="svg-wrapper-1">
                                                <div className="svg-wrapper">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path
                                                            fill="currentColor"
                                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className='tracking-wide'>Send</span>
                                        </button>
                                        {/* <button type='submit' className="Cbutton bg-blue-500 border-none">
                                            <div className="Coutline"></div>
                                            <div className="state state--default">
                                                <div className="Cicon text-black font-bold">
                                                    <svg 
                                                        width="1em"
                                                        height="1em"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g style={{ filter: "url(#shadow)" }}>
                                                            <path
                                                                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                                                                fill="currentColor"
                                                            ></path>
                                                            <path
                                                                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <filter id="shadow">
                                                                <feDropShadow
                                                                    dx="0"
                                                                    dy="1"
                                                                    stdDeviation="0.6"
                                                                    floodOpacity="0.5"
                                                                ></feDropShadow>
                                                            </filter>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <p className='text-black font-medium tracking-[-0.2em]'>
                                                    <span style={{ "--i": 0 }}>S</span>
                                                    <span style={{ "--i": 1 }}>e</span>
                                                    <span style={{ "--i": 2 }}>n</span>
                                                    <span style={{ "--i": 3 }}>d</span>
                                                    <span style={{ "--i": 4 }}>M</span>
                                                    <span style={{ "--i": 5 }}>e</span>
                                                    <span style={{ "--i": 6 }}>s</span>
                                                    <span style={{ "--i": 7 }}>s</span>
                                                    <span style={{ "--i": 8 }}>a</span>
                                                    <span style={{ "--i": 9 }}>g</span>
                                                    <span style={{ "--i": 10 }}>e</span>
                                                </p>
                                            </div>
                                            <div className="state state--sent">
                                                <div className="Cicon text-black">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        height="1em"
                                                        width="1em"
                                                        strokeWidth="0.5px"
                                                        stroke="black"
                                                    >
                                                        <g style={{ filter: "url(#shadow)" }}>
                                                            <path
                                                                fill="currentColor"
                                                                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                                                            ></path>
                                                            <path
                                                                fill="currentColor"
                                                                d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <p className='text-black tracking-[-0.2em] font-medium'>
                                                    <span style={{ "--i": 5 }}>S</span>
                                                    <span style={{ "--i": 6 }}>e</span>
                                                    <span style={{ "--i": 7 }}>n</span>
                                                    <span style={{ "--i": 8 }}>t</span>
                                                </p>
                                            </div>
                                        </button> */}
                                    </Animation>
                                </div>
                            </div>
                        </form>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                        />
                    </Animation>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
