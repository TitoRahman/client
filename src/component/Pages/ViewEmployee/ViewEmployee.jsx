import Axios from 'axios'
import React, {useState, useEffect} from 'react';
import Modal_AddEmployee from '../AddEmployee/Modal_AddEmployee';
import Modal_UpdateEmployee from '../UpdateEmployee/Modal_UpdateEmployee';

const HeadingTable = [
    {
        name: 'First Name'
    }, {
        name: 'Last Name'
    }, {
        name: 'Email'
    }, {
        name: 'Address'
    }, {
        name: 'Phone'
    }, {
        name: 'Action'
    }
]

const DataTable = [
    {
        firstname: 'Arif',
        lastname: 'Jagad',
        email: '191111851@students.mikroskil.ac.id',
        address: 'Mikroskil',
        phone: '6282167565321'
    }
]

export default function ViewEmployee() {

    const [EmployeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        Axios
            .get('http://localhost:3001/viewAllEmployee')
            .then((response) => {
                setEmployeeData(response.data);
                console.log(response.data);
            })
    }, []);

    return (
        <div class="overflow-x-auto">
            <div class="flex items-center justify-center overflow-hidden">
                <div class="w-full lg:w-6/6">
                    <div class="shadow-md rounded my-6">
                        <table class="min-w-max w-full table-auto">
                            <thead>

                                {
                                    EmployeeData.map((item, key) => (
                                        <th
                                            key={item?._id}
                                            class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                            {item.FirstnName}
                                        </th>
                                    ))
                                }

                                {/* <tr>
                                    <th
                                        class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">First Name</th>
                                    <td
                                        key={key}
                                        class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">{item.FirstName}</td>
                                </tr>
                                <tr>
                                    <th
                                        class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Last Name</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">Jagad</td>
                                </tr>
                                <tr>
                                    <th
                                        class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Email</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">191111851@students.mikroskil.ac.id</td>
                                </tr>
                                <tr>
                                    <th
                                        class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Address</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">Mikroskil</td>
                                </tr>
                                <tr>
                                    <th
                                        class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal py-3 px-6 text-left">Phone</th>
                                    <td class="border-gray-200 hover:bg-gray-100 py-3 px-6 text-left font-normal">6282167565321</td>
                                </tr> */
                                }
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
