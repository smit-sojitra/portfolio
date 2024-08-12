import { Transition, Dialog } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  MenuIcon, X } from 'lucide-react'
import Animation from './Animation'
import { IoHomeOutline } from 'react-icons/io5'
import { GoPerson } from 'react-icons/go'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { TiMessage } from 'react-icons/ti'
import img from "../assets/image.png"

const DropDownMenu = () => {
  const [open, setOpen] = useState(false)

  const pathname = useParams()

  useEffect(() => {
    setOpen(false)
  }, [])
  return (
    <div className=''>
      <div className='w-full flex justify-between items-center'>

        <button onClick={() => setOpen(true)} className='p-2 rounded-lg'>
          <MenuIcon className='DropMenu' />
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-[100000000]' onClose={setOpen}>
          <div className='fixed inset-0 w-full' />
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 left-0 flex w-full'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='-translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='-translate-x-full'>
                  <Dialog.Panel className='pointer-events-auto w-screen sm:hidden bg-[#121212]'>
                    <div className='flex h-full flex-col overflow-hidden py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <div className='flex items-center justify-between'>
                          <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                            <div className="logo-container">
                              <Animation >
                                <Link to={'/'}>
                                  <img className="logo w-[clamp(35px,10vw,70px)]" src={img} alt="logo" />
                                </Link>
                              </Animation>
                              <Animation>
                                <Link to={'/'}>
                                  <div className="logo-text text-[clamp(15px,5vw,28px)]">mit sojitra</div>
                                </Link>
                              </Animation>
                            </div>
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <Animation>
                              <button
                                type='button'
                                className='rounded-md bg-[#3c5bb8] text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                onClick={() => setOpen(false)}>
                                <span className='sr-only'>Close panel</span>
                                <X className='h-6 w-6' aria-hidden='true' />
                              </button>
                            </Animation>
                          </div>
                        </div>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        {/* Content */}

                        <div className="nav-items flex-col justify-center items-center h-[90%]">
                          <Animation>

                          <Link to={'/'}><div className='menu lg:flex lg:flex-row flex flex-col gap-1 items-center'><IoHomeOutline />Home</div></Link>
                          </Animation>
                          <Animation>

                          <Link to={'/skills'}><div className='menu lg:flex lg:flex-row flex flex-col gap-1 items-center'><GoPerson />About</div></Link>
                          </Animation>
                          <Animation>

                          <Link to={'/projects'}><div className='menu lg:flex lg:flex-row flex flex-col gap-1 items-center'><AiOutlineFundProjectionScreen />Projects</div></Link>
                          </Animation>
                          <Animation>
                            
                          <Link to={'/contact'}><div className='menu lg:flex lg:flex-row flex flex-col gap-1 items-center'><TiMessage />Contact</div></Link>
                          </Animation>
                        </div>

                        {/* content end */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}

export default DropDownMenu