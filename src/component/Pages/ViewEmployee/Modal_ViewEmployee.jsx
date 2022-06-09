import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import ViewEmployee from './ViewEmployee'

export default function Modal_ViewEmployee() {
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
            className="h-5 w-5 text-sky-600 hover:text-sky-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={openModal}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
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
                        class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title>
                            <div class="flex">
                                <div class="grow h-14">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">View Employee</h3>
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
                            <ViewEmployee/>
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