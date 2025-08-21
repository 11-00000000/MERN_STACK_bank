"use client";
import CustomAuthButton from '@/components/reuseable/CustomAuthButton';
import { useMainContext } from '@/context/MainContext';
import { axiosClient } from '@/utils/AxiosClient';
import { CARD_TYPE } from '@/utils/constant';
import { Dialog, Transition } from '@headlessui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Fragment, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';
import * as yup from 'yup'

export default function AddNewCardDialog() {
  let [isOpen, setIsOpen] = useState(false)
  const [loading,setLoading] = useState(false)
  const {user,fetchUserProfile} = useMainContext()

  const Types = Object.keys(CARD_TYPE)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
   const validationSchema = yup.object({
    account:yup.string().required("Account No is required"),
    card_type:yup.string().required("Choose Valid Card Type").oneOf(Object.keys(CARD_TYPE),"Choose Valid Card Type"),
    pin:yup.string().required("Pin No is Requird").min(4,"Pin No Should be Equal to 4 Digit").max(4,"Equal to 4 Digit")
  })

 const initialValues = {
    account:'',
    card_type:'',
    pin:''
  }
const onSubmitHandler = async(values,{resetForm})=>{
    try {
      setLoading(true)
      
      const response = await axiosClient.post('/atm/add-new',values,{
        headers:{
          'Authorization':'Bearer '+ localStorage.getItem("token")
        }
      })
      const data = await response.data 

      toast.success(data.msg)
      await fetchUserProfile()
      resetForm()


    } catch (error) {
      toast.error(error.response.data.msg || error.message)
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
      
       <button
          type="button"
          onClick={openModal}
          className="rounded-md w-1/2 px-6 py-2 bg-blue-600 text-white flex items-center justify-center gap-x-2 outline-none border-none cursor-pointer"
        >
         <span>Add New</span> <FaPlus/>
        </button> 

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                  >
                 <h3>Add New ATM </h3>
                 <button onClick={closeModal} className='p-2 text-2xl text-blue-700 bg-blue-50 rounded-full outline-none border-none cursor-pointer'>
                  <IoClose/>
                 </button>


                  </Dialog.Title>
                  <div className="mt-2">
<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
{({values,handleSubmit})=>(
       <form onSubmit={handleSubmit} className='py-4'>
     <div className="mb-3">
        <label htmlFor="account">Account No.</label>
        <Field type="text" name="account" id="account" className='w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-600' placeholder='Enter Account No.'/>
        <ErrorMessage name="account" component="div" className='text-red-500
  text-sm mt-1'/>
</div>
<div>
  <label htmlFor="card_type">Card Type</label>
 <Field as="select" className='w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-600'  name="card_type" id="card_type">
                                        {                    
                   Types  && Types.length>0 ? <>
                  <option value="">Select</option>
                   { Types.map((cur,i)=>{
                    return <option key={i} className='' value={cur}>{cur}</option>
                  })}
                  </>:
                  <option value="">No Card Type Here</option>
                 }
                      </Field>
                      <ErrorMessage  className='text-red-500' component={'p'} name='card_type'  /> 
                                    </div>
 <div className="mb-3">
                  <label htmlFor="pin">PIN</label>
                  <Field type="text" id="pin" name="pin"  className='w-full p-2 border border-gray-300 rounded-md outline-none focus:border-blue-600' placeholder='PIN Number' onInput={(e)=>{
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }} >
                     </Field>
                  <ErrorMessage  className='text-red-500' component={'p'} name='pin'  /> 
                 </div>
   <div className="mb-3">
   <CustomAuthButton isLoading={loading}  text={'Add New'} />
   </div>

               
  </form>

)}
    </Formik>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
