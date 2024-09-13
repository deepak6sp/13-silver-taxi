import { MapPinIcon } from '@heroicons/react/16/solid';
import { ClockIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid';
import { GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import { Card } from 'flowbite-react';
const features = [
  {
    name: 'Door to door',
    description: 'Whether you are traveling with your friends or alone, we can pick you up at your convenience.',
    icon: MapPinIcon,
  },
  {
    name: 'Full Day Services',
    description:
      'This service will be very useful for any busy city dweller, especially for businessmen and travelers.',
    icon: ClockIcon,
  },
  {
    name: 'Out-of-Town Trips',
    description:
      'Our company provides a fleet of top of the line vehicles available to travel throughout the area.',
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: 'Airport Shuttles',
    description:
      'We offer around the clock door-to-door airport transfer from anywhere to and from the Airport.',
    icon: PaperAirplaneIcon,
  },
]

const Services = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-600">13 Silver Taxi</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl">
            OUR SERVICES
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>


        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="max-w-sm"
                renderImage={() => <div className='mt-6 ml-4'><feature.icon aria-hidden="true" className="rounded-full h-12 w-12 p-3 text-rose-600 border-2 border-rose-600" /></div>}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {feature.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Services;