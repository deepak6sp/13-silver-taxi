'use client'

import { useState } from 'react'

import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, EnvelopeIcon, InboxIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Airport transfer', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Wedding transfer', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Hotel transfer', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Corporate transfer', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Events Tranfer', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Book now', href: '#', icon: PlayCircleIcon },
    { name: 'Contact us', href: '#', icon: PhoneIcon },
]


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <nav aria-label="Global" className="bg-white mx-auto sm:flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=rose" className="h-8 w-auto" />
                        </a>
                    </div>
                    <div className="flex lg:flex-1 mt-8 sm:mt-0">
                        <InboxIcon aria-hidden="true" className="rounded-full h-12 w-12 p-3 text-rose-600 border-2 border-rose-600" />
                        <a href="#" className="ml-2 flex flex-col">
                            <span className='text-rose-600 font-semibold'>Servicing</span>
                            <span className='text-slate-600'>Melbourne</span>
                        </a>
                    </div>
                    <div className="flex lg:flex-1 mt-8 sm:mt-0">
                        <PhoneIcon aria-hidden="true" className="rounded-full h-12 w-12 p-3 text-rose-600 border-2 border-rose-600" />
                        <a href="#" className="ml-2 flex flex-col">
                            <span className='text-rose-600 font-semibold'>Phone</span>
                            <span className='text-slate-600'>1300 123 456</span>
                        </a>
                    </div>
                    <div className="flex lg:flex-1 mt-8 sm:mt-0">
                        <EnvelopeIcon aria-hidden="true" className="rounded-full h-12 w-12 p-3 text-rose-600 border-2 border-rose-600" />
                        <a href="#" className="ml-2 flex flex-col">
                            <span className='text-rose-600 font-semibold'>Email</span>
                            <span className='text-slate-600'>mail@mail.com</span>
                        </a>
                    </div>
            </nav>

            <header className="bg-slate-800">


                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    {/* <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=white" className="h-8 w-auto" />
                    </a>
                </div> */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-bold leading-6 text-white">
                            <strong>HOME</strong>
                        </a>
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-bold leading-6 text-white">
                                SERVICES
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-white hover:text-slate-800"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-white">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-100"
                                        >
                                            <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                        <a href="#" className="text-sm font-bold leading-6 text-white">
                            BOOKING
                        </a>
                        <a href="#" className="text-sm font-bold leading-6 text-white">
                            CONTACT
                        </a>
                        <a href="#" className="text-sm font-bold leading-6 text-white">
                            ABOUT
                        </a>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white hover:bg-rose-600 px-3 py-2 text-sm font-semibold text-rose-600 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                        >
                            <a href="#" className="text-sm font-bold leading-6">
                                BOOK NOW <span aria-hidden="true">&rarr;</span>
                            </a>
                        </button>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-white"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-white hover:text-slate-800"
                                    >
                                        HOME
                                    </a>
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm font-semibold leading-7 text-white hover:bg-white hover:text-slate-800">
                                            Services
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...products, ...callsToAction].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-white hover:text-slate-800"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>

                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-white hover:text-slate-800"
                                    >
                                        Booking
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-white hover:text-slate-800"
                                    >
                                        Contact us
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-white hover:bg-white hover:text-slate-800"
                                    >
                                        About us
                                    </a>
                                </div>
                                <div className="py-6">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        <a href="#" className="text-sm font-semibold leading-6">
                                            Book now <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    )
}

export default Navbar;