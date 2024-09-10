"use client";

import styles from '../styles/banner.module.css'
import { PhoneIcon } from '@heroicons/react/24/solid';

// const links = [
//     { name: 'Book now', href: '#' },
//     { name: 'Call us', href: '#' }
// ]
// const stats = [
//     { name: 'Offices worldwide', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
// ]

const Banner = () => {
    return (
        <>
            {/* <div className="h-96">
        <Carousel indicators={false}>
          <Image
                  alt=""
                  src={taxi1}
                  className=""
              />
              <Image
                  alt=""
                  src={taxi2}
                  className=""
              />
        </Carousel>
      </div> */}

            <section className={`${styles.overlay} h-screen relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 `}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    {/* <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-8xl font-mono">13 SILVER TAXI</h2> */}
                    <h6 className="mt-32 text-2xl font-bold tracking-tight text-white sm:text-2xl font-sans text-white">Upto 25% off on first booking</h6>
                    <button
                        type="button"
                        className="mt-12 inline-flex items-center rounded-md bg-rose-600 px-6 sm:px-24 py-3 sm:py-6 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                    >
                        <a href="#" className="font-bold leading-6 sm:text-base">
                            BOOK NOW <span aria-hidden="true">&rarr;</span>
                        </a>
                    </button>
                    {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p> */}
                    {/* <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <button
                                    key={link.name}
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <a href={link.href}>
                                        {link.name} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </button>

                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div> */}
                </div>
                <PhoneIcon aria-hidden="true" className="left-12 bottom-12 fixed rounded-full h-20 w-20 p-6 text-white bg-rose-600" />
            </section>
        </>
    )
}

export default Banner;