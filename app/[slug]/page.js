import ClientRenderer from './ClientRenderer'

const slugs = [
  'AbbotsAleHouse','AhmetsBarber','AlibiBar','BailickBlinds','BakersSon',
  'BakerssonCafe','BarberlandCork','BeYoutifulSalon','BeanLeafCarrigtwohill',
  'BigBluePizza','BodrumTurkishBarber','BostonChipper','BounceHairSalon',
  'BrazukasBarbershop','BuzzCutz','CaliWomensWear','CaspianBarbers','CastleInnCork',
  'CityBarbersCork','CornerHouseCork','CrewCutsBarbers','CuppacityCoffee',
  'DJABarbers','DanOldenButchers','DudsnSuds','EarthWayRefill','FellinisCafe',
  'FrancoBarbieri','GlandoreInn','GuchiNails','HartysRestaurant','HiBBar',
  'IstanbulKebab','JoeMcSweeney','KopperHairStudio','LaundryBasket','LegendsBarbers',
  'LembergBarbershop','LuminousDental','MurvHairStudio','MusasBarbers','MuttonLaneInn',
  'NailBoxCork','Nosh19','OvalBarCork','PANCafe','ParadiseHairBeauty','PinkShampoo',
  'RobRoyBar','RobRoyCorkCity','SatelliteCleaners','SaucyPups','SchoonerBar',
  'ScoopsGelato','SinECork','SineadHairSalon','SoloHairDesign','SpiceOfIndia',
  'SpringGardenRestaurant','SultanCafe','SzablaTattoo','ThairishCork','ToastieCafe',
  'TomWintersBarbers','TotuDelikatesy','TrawlerBoyz','UppercutsBarber'
]

export default function Page({ params }) {
  return <ClientRenderer slug={params.slug} />
}

export async function generateStaticParams() {
  return slugs.map(slug => ({ slug }))
}
