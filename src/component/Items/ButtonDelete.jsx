import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'

export default function ButtonDelete() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (<> <div >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-600 hover:text-red-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={openModal}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
    
</div>

<Transition appear="appear" show={isOpen} as={Fragment}>
    <Dialog as="div" class="relative z-10" onClose={closeModal}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25"/>
        </Transition.Child>

        <div class="fixed inset-0 overflow-y-auto width-100">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <Dialog.Panel
                        class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title>
                            <div class="flex">
                                <div class="grow h-14">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">Delete Confirmation</h3>
                                </div>
                                <div class="grow h-14">
                                    <div class=" float-right">
                                        <button
                                            type="button"
                                            class="text-red-600"
                                            onClick={closeModal}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Title>
                        <div>
                            <p>Are you sure want to delete this data?</p>
                            <div class="flex flex-row float-right mt-4">
                                <div className="py-3 bg-gray-50 text-right mr-2">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                        onClick={() => setIsOpen(false)}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="py-3 bg-gray-50 text-right">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                        Ok
                                    </button>
                                </div>
                            </div>
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