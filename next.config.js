A da, ispravka! Zamijeni sve linkove u `next.config.js` — dodaj `https://www.` ispred svakog base44 linka. Znači umjesto:

```
destination: 'https://graces-piltown-bites.base44.app'
```

treba biti:

```
destination: 'https://www.graces-piltown-bites.base44.app'
```

Evo cijeli ispravljeni kod, kopiraj i zamijeni:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/FreshBeans', destination: 'https://www.fresh-beans-deli.base44.app', permanent: false },
      { source: '/WalshPub', destination: 'https://www.walsh-victorian-pub.base44.app', permanent: false },
      { source: '/GracesTakeaway', destination: 'https://www.graces-piltown-bites.base44.app', permanent: false },
      { source: '/DiligentNails', destination: 'https://www.diligent-essence-nail-edit.base44.app', permanent: false },
      { source: '/TipGlowNails', destination: 'https://www.tip-glow-waterford.base44.app', permanent: false },
      { source: '/VenusGlow', destination: 'https://www.venus-glow-studio.base44.app', permanent: false },
      { source: '/LotusNailSpa', destination: 'https://www.lotus-nail-glow.base44.app', permanent: false },
      { source: '/ZamFastFood', destination: 'https://www.zam-fast-feed.base44.app', permanent: false },
      { source: '/HichamsBarber', destination: 'https://www.hichams-sharp-look.base44.app', permanent: false },
      { source: '/HichamCuts', destination: 'https://www.hicham-sharp-cuts.base44.app', permanent: false },
      { source: '/StephenStreetBarbers', destination: 'https://www.stephen-street-cuts.base44.app', permanent: false },
      { source: '/InaFreshCuts', destination: 'https://www.ina-fresh-cuts.base44.app', permanent: false },
      { source: '/EliteGrooming', destination: 'https://www.elite-grooming-lab.base44.app', permanent: false },
      { source: '/SweeneyTodd', destination: 'https://www.sweeney-todd-cuts.base44.app', permanent: false },
      { source: '/ArdkeenRazor', destination: 'https://www.ardkeen-razor-studio.base44.app', permanent: false },
      { source: '/ScoopsCobh', destination: 'https://www.scoop-cobh-joy.base44.app', permanent: false },
      { source: '/SprattsPub', destination: 'https://www.spratts-cork-pub.base44.app', permanent: false },
      { source: '/CorkFloral', destination: 'https://www.cork-floral-atelier.base44.app', permanent: false },
      { source: '/HnsSanctuary', destination: 'https://www.hns-sanctuary-flow.base44.app', permanent: false },
      { source: '/HavanaNails', destination: 'https://www.havana-nail-aura.base44.app', permanent: false },
      { source: '/AbbeyTavern', destination: 'https://www.abbey-tavern-lough.base44.app', permanent: false },
      { source: '/GallowsPub', destination: 'https://www.gallows-cork-pub.base44.app', permanent: false },
      { source: '/PeakyBlade', destination: 'https://www.peaky-blade-cork.base44.app', permanent: false },
      { source: '/PaulsCuts', destination: 'https://www.pauls-cork-cuts.base44.app', permanent: false },
      { source: '/MayfieldBarber', destination: 'https://www.mayfield-barber-flow.base44.app', permanent: false },
      { source: '/FoneFix', destination: 'https://www.fone-fix-pulse.base44.app', permanent: false },
      { source: '/BakerBarista', destination: 'https://www.baker-barista-brew.base44.app', permanent: false },
      { source: '/DailyBagel', destination: 'https://www.daily-bagel-brew.base44.app', permanent: false },
      { source: '/OodlesGelato', destination: 'https://www.oodles-chill-scoop.base44.app', permanent: false },
      { source: '/CandyJoy', destination: 'https://www.candy-joy-mahon.base44.app', permanent: false },
      { source: '/ProValet', destination: 'https://www.pro-valet-shine.base44.app', permanent: false },
      { source: '/ClipADoodle', destination: 'https://www.clip-a-doodle-doo-1a46dfc2.base44.app', permanent: false },
      { source: '/MariePetCare', destination: 'https://www.marie-pet-pride.base44.app', permanent: false },
    ]
  }
}

module.exports = nextConfig
```

Kopiraj, zalijeppi, commit — pa javi kad je gotovo!
