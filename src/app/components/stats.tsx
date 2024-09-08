const stats = [
    { id: 1, name: 'Rides', value: '44,000' },
    { id: 2, name: 'Tranasactions', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-neutral-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  