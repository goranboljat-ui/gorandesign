'use client'

import AbbotsAleHouse from '../../components/AbbotsAleHouse'
import AhmetsBarber from '../../components/AhmetsBarber'
import AlibiBar from '../../components/AlibiBar'
import BailickBlinds from '../../components/BailickBlinds'
import BakersSon from '../../components/BakersSon'
import BakerssonCafe from '../../components/BakerssonCafe'
import BarberlandCork from '../../components/BarberlandCork'
import BeYoutifulSalon from '../../components/BeYoutifulSalon'
import BeanLeafCarrigtwohill from '../../components/BeanLeafCarrigtwohill'
import BigBluePizza from '../../components/BigBluePizza'
import BodrumTurkishBarber from '../../components/BodrumTurkishBarber'
import BostonChipper from '../../components/BostonChipper'
import BounceHairSalon from '../../components/BounceHairSalon'
import BrazukasBarbershop from '../../components/BrazukasBarbershop'
import BuzzCutz from '../../components/BuzzCutz'
import CaliWomensWear from '../../components/CaliWomensWear'
import CaspianBarbers from '../../components/CaspianBarbers'
import CastleInnCork from '../../components/CastleInnCork'
import CityBarbersCork from '../../components/CityBarbersCork'
import CornerHouseCork from '../../components/CornerHouseCork'
import CrewCutsBarbers from '../../components/CrewCutsBarbers'
import CuppacityCoffee from '../../components/CuppacityCoffee'
import DJABarbers from '../../components/DJABarbers'
import DanOldenButchers from '../../components/DanOldenButchers'
import DudsnSuds from '../../components/DudsnSuds'
import EarthWayRefill from '../../components/EarthWayRefill'
import FellinisCafe from '../../components/FellinisCafe'
import FrancoBarbieri from '../../components/FrancoBarbieri'
import GlandoreInn from '../../components/GlandoreInn'
import GuchiNails from '../../components/GuchiNails'
import HartysRestaurant from '../../components/HartysRestaurant'
import HiBBar from '../../components/HiBBar'
import IstanbulKebab from '../../components/IstanbulKebab'
import JoeMcSweeney from '../../components/JoeMcSweeney'
import KopperHairStudio from '../../components/KopperHairStudio'
import LaundryBasket from '../../components/LaundryBasket'
import LegendsBarbers from '../../components/LegendsBarbers'
import LembergBarbershop from '../../components/LembergBarbershop'
import LuminousDental from '../../components/LuminousDental'
import MurvHairStudio from '../../components/MurvHairStudio'
import MusasBarbers from '../../components/MusasBarbers'
import MuttonLaneInn from '../../components/MuttonLaneInn'
import NailBoxCork from '../../components/NailBoxCork'
import Nosh19 from '../../components/Nosh19'
import OvalBarCork from '../../components/OvalBarCork'
import PANCafe from '../../components/PANCafe'
import ParadiseHairBeauty from '../../components/ParadiseHairBeauty'
import PinkShampoo from '../../components/PinkShampoo'
import RobRoyBar from '../../components/RobRoyBar'
import RobRoyCorkCity from '../../components/RobRoyCorkCity'
import SatelliteCleaners from '../../components/SatelliteCleaners'
import SaucyPups from '../../components/SaucyPups'
import SchoonerBar from '../../components/SchoonerBar'
import ScoopsGelato from '../../components/ScoopsGelato'
import SinECork from '../../components/SinECork'
import SineadHairSalon from '../../components/SineadHairSalon'
import SoloHairDesign from '../../components/SoloHairDesign'
import SpiceOfIndia from '../../components/SpiceOfIndia'
import SpringGardenRestaurant from '../../components/SpringGardenRestaurant'
import SultanCafe from '../../components/SultanCafe'
import SzablaTattoo from '../../components/SzablaTattoo'
import ThairishCork from '../../components/ThairishCork'
import ToastieCafe from '../../components/ToastieCafe'
import TomWintersBarbers from '../../components/TomWintersBarbers'
import TotuDelikatesy from '../../components/TotuDelikatesy'
import TrawlerBoyz from '../../components/TrawlerBoyz'
import UppercutsBarber from '../../components/UppercutsBarber'

const pages = {
  AbbotsAleHouse, AhmetsBarber, AlibiBar, BailickBlinds, BakersSon,
  BakerssonCafe, BarberlandCork, BeYoutifulSalon, BeanLeafCarrigtwohill,
  BigBluePizza, BodrumTurkishBarber, BostonChipper, BounceHairSalon,
  BrazukasBarbershop, BuzzCutz, CaliWomensWear, CaspianBarbers, CastleInnCork,
  CityBarbersCork, CornerHouseCork, CrewCutsBarbers, CuppacityCoffee,
  DJABarbers, DanOldenButchers, DudsnSuds, EarthWayRefill, FellinisCafe,
  FrancoBarbieri, GlandoreInn, GuchiNails, HartysRestaurant, HiBBar,
  IstanbulKebab, JoeMcSweeney, KopperHairStudio, LaundryBasket, LegendsBarbers,
  LembergBarbershop, LuminousDental, MurvHairStudio, MusasBarbers, MuttonLaneInn,
  NailBoxCork, Nosh19, OvalBarCork, PANCafe, ParadiseHairBeauty, PinkShampoo,
  RobRoyBar, RobRoyCorkCity, SatelliteCleaners, SaucyPups, SchoonerBar,
  ScoopsGelato, SinECork, SineadHairSalon, SoloHairDesign, SpiceOfIndia,
  SpringGardenRestaurant, SultanCafe, SzablaTattoo, ThairishCork, ToastieCafe,
  TomWintersBarbers, TotuDelikatesy, TrawlerBoyz, UppercutsBarber
}

export default function ClientRenderer({ slug }) {
  const Component = pages[slug]
  if (!Component) return <div style={{color:'white',padding:'40px',textAlign:'center'}}>Page not found: {slug}</div>
  return <Component />
}

export const pageKeys = Object.keys(pages)
