import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'You’ve sent your transfer',
    href: '#',
    date: 'Today at',
    datetime: '2020-09-20',
    iconBackground: 'bg-[#35803F]',
  },
  {
    id: 2,
    content: 'We’ve received your USD ',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    iconBackground: 'bg-[#35803F]',
  },
  {
    id: 3,
    content: 'The NGN is on its way',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    iconBackground: 'bg-gray-400',
  },
  
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function TimeLine() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-6 items-center justify-between">
              <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-2 w-2 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
