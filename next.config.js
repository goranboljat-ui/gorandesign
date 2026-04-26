/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/FreshBeans', destination: 'https://fresh-beans-deli.base44.app', permanent: false },
      { source: '/WalshPub', destination: 'https://walsh-victorian-pub.base44.app', permanent: false },
      { source: '/GracesTakeaway', destination: 'https://graces-piltown-bites.base44.app', permanent: false },
      { source: '/DiligentNails', destination: 'https://diligent-essence-nail-edit.base44.app', permanent: false },
      { source: '/TipGlowNails', destination: 'https://tip-glow-waterford.base44.app', permanent: false },
      { source: '/VenusGlow', destination: 'https://venus-glow-studio.base44.app', permanent: false },
      { source: '/LotusNailSpa', destination: 'https://lotus-nail-glow.base44.app', permanent: false },
      { source: '/ZamFastFood', destination: 'https://zam-fast-feed.base44.app', permanent: false },
      { source: '/HichamsBarber', destination: 'https://hichams-sharp-look.base44.app', permanent: false },
      { source: '/HichamCuts', destination: 'https://hicham-sharp-cuts.base44.app', permanent: false },
      { source: '/StephenStreetBarbers', destination: 'https://stephen-street-cuts.base44.app', permanent: false },
      { source: '/InaFreshCuts', destination: 'https://ina-fresh-cuts.base44.app', permanent: false },
      { source: '/EliteGrooming', destination: 'https://elite-grooming-lab.base44.app', permanent: false },
      { source: '/SweeneyTodd', destination: 'https://sweeney-todd-cuts.base44.app', permanent: false },
      { source: '/ArdkeenRazor', destination: 'https://ardkeen-razor-studio.base44.app', permanent: false },
      { source: '/ScoopsCobh', destination: 'https://scoop-cobh-joy.base44.app', permanent: false },
      { source: '/SprattsPub', destination: 'https://spratts-cork-pub.base44.app', permanent: false },
      { source: '/CorkFloral', destination: 'https://cork-floral-atelier.base44.app', permanent: false },
      { source: '/HnsSanctuary', destination: 'https://hns-sanctuary-flow.base44.app', permanent: false },
      { source: '/HavanaNails', destination: 'https://havana-nail-aura.base44.app', permanent: false },
      { source: '/AbbeyTavern', destination: 'https://abbey-tavern-lough.base44.app', permanent: false },
      { source: '/GallowsPub', destination: 'https://gallows-cork-pub.base44.app', permanent: false },
      { source: '/PeakyBlade', destination: 'https://peaky-blade-cork.base44.app', permanent: false },
      { source: '/PaulsCuts', destination: 'https://pauls-cork-cuts.base44.app', permanent: false },
      { source: '/MayfieldBarber', destination: 'https://mayfield-barber-flow.base44.app', permanent: false },
      { source: '/FoneFix', destination: 'https://fone-fix-pulse.base44.app', permanent: false },
      { source: '/BakerBarista', destination: 'https://baker-barista-brew.base44.app', permanent: false },
      { source: '/DailyBagel', destination: 'https://daily-bagel-brew.base44.app', permanent: false },
      { source: '/OodlesGelato', destination: 'https://oodles-chill-scoop.base44.app', permanent: false },
      { source: '/CandyJoy', destination: 'https://candy-joy-mahon.base44.app', permanent: false },
      { source: '/ProValet', destination: 'https://pro-valet-shine.base44.app', permanent: false },
      { source: '/ClipADoodle', destination: 'https://clip-a-doodle-doo-1a46dfc2.base44.app', permanent: false },
      { source: '/MariePetCare', destination: 'https://marie-pet-pride.base44.app', permanent: false },
    ]
  }
}

module.exports = nextConfig
