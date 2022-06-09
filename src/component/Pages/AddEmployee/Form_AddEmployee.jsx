import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import Axios from 'axios'

export default function Form_AddEmployee() {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone, setPhone] = useState('0')

    const addEmployeeButton = () => {
        Axios.post('http://localhost:3001/AddEmployee',{
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Address: Address,
            Phone: Phone
        })
    }

    return (
        <form action="#">
            <div className="">
                <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(event) => {
                                    setFirstName(event.target.value);
                                }}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                Last name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(event) => {
                                    setLastName(event.target.value);
                                }}/>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}/>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <textarea
                                name="address"
                                id="address"
                                autoComplete="family-name"
                                className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(event) => {
                                    setAddress(event.target.value);
                                }}/>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="number"
                                name="phone"
                                id="phone"
                                autoComplete="family-name"
                                className="mt-2 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }}/>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        onClick={addEmployeeButton}>
                        Add New
                    </button>
                </div>
            </div>
        </form>
    )
}
