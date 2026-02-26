import Link from 'next/link'
import Image from 'next/image'

const NewonAD = () => {
  const items = [
    {
      src: 'https://m.media-amazon.com/images/I/61H7r44N4pL._AC_SY200_.jpg',
      href: '/product/1',
    },
    {
      src: 'https://m.media-amazon.com/images/I/71K+nIn+W5L._AC_SY200_.jpg',
      href: '/product/2',
    },
    {
      src: 'https://m.media-amazon.com/images/I/61MvS+O+xEL._AC_SY200_.jpg',
      href: '/product/3',
    },
    {
      src: 'https://m.media-amazon.com/images/I/51r-lM-vKJL._AC_SY200_.jpg',
      href: '/product/4',
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 shadow-md w-full min-h-[400px] flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-3 text-black dark:text-white">
        New on Amr Dukan
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm group"
          >
            <Image
              src={item.src}
              alt={`New arrival ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewonAD
