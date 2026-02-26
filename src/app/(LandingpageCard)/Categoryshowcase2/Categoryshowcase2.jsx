import Shopbop from './shopbop'
import DateNight from './Date-Night'
import Bestsnikers from './Bestsnikers'
import NewonAD from './NewonAD'

export default function Categoryshowcase2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-0 py-10 relative z-40 bg-neutral-100 dark:bg-zinc-950">
      <Shopbop />
      <DateNight />
      <Bestsnikers />
      <NewonAD />
    </div>
  )
}
