import SaveOnAD from './SaveOnAD'
import Curatedvacationlooks from './Curatedvacationlooks'
import Trendingspringbags from './Trendingspringbags'
import Buildyourbeautyroutine from './Buildyourbeautyroutine'

export default function Landingpagecards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-0 -mt-16 md:-mt-32 lg:-mt-48 xl:-mt-64 relative z-40 pb-10">
      <SaveOnAD />
      <Curatedvacationlooks />
      <Trendingspringbags />
      <Buildyourbeautyroutine />
    </div>
  )
}
