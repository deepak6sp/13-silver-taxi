const stats = [
  { id: 1, name: 'Rides', value: '44,000' },
  { id: 2, name: 'Tranasactions', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Stats() {
  return (
    <div className="bg-slate-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-3xl font-bold tracking-tight text-white dark:text-white">
            Who we are
          </h3>
          <p className="font-normal text-white dark:text-gray-400 mt-4">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left lg:grid-cols-3 mt-10">
            {stats.map((stat) => (
              <div key={stat.id}>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
    </div>
  )
}
