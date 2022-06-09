import Axios from 'axios'
import React, {useState, useEffect} from 'react';
import ButtonDelete from '../../Items/ButtonDelete';
import Modal_AddEmployee from '../AddEmployee/Modal_AddEmployee';
import Modal_UpdateEmployee from '../UpdateEmployee/Modal_UpdateEmployee';
import Modal_ViewEmployee from '../ViewEmployee/Modal_ViewEmployee';

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

export default function ViewAllEmployee() {

    const [EmployeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        Axios
            .get('http://localhost:3001/viewAllEmployee')
            .then((response) => {
                setEmployeeData(response.data);
            })
    }, []);

    return (
        <form action="#" method="post">
            <div class="overflow-x-auto">
                <div class="flex items-center justify-center overflow-hidden">
                    <div class="w-full lg:w-4/6">
                        <Modal_AddEmployee/>
                    </div>
                </div>
                <div class="flex items-center justify-center overflow-hidden">
                    <div class="w-full lg:w-4/6">
                        <div class="shadow-md rounded my-6">
                            <table class="min-w-max w-full table-auto">
                                <thead>
                                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        {
                                            HeadingTable.map(
                                                (item) => (<th class="py-3 px-6 text-center">{item.name}</th>)
                                            )
                                        }
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">
                                    {
                                        EmployeeData.map((item, key) => (
                                            <tr key={key} class="border-b border-gray-200 hover:bg-gray-100">
                                                <td class="py-3 px-6 text-center font-normal">
                                                    {item.FirstName}
                                                </td>
                                                <td class="py-3 px-6 text-center font-normal">
                                                    {item.LastName}
                                                </td>
                                                <td class="py-3 px-6 text-center font-normal">
                                                    {item.Email}
                                                </td>
                                                <td class="py-3 px-6 text-center font-normal">
                                                    {item.Address}
                                                </td>
                                                <td class="py-3 px-6 text-center font-normal">
                                                    {item.Phone}
                                                </td>
                                                <td class="py-3 px-6 text-center font-normal">
                                                    <div class="flex item-center justify-center">
                                                        <Modal_ViewEmployee/>
                                                        <Modal_UpdateEmployee/>
                                                        <ButtonDelete/>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
