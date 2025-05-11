# Steak bake spidermap 

This little map experiment uses [Turf.js](https://turfjs.org/) and [Mapbox](https://www.mapbox.com/) to create dynamic hub and spoke maps. It uses code written by [William B. Davis](https://twitter.com/willy_maps) and then adapted by [Garrett Dash Nelson](https://twitter.com/en_dash) - and then lightly tweaked by me. As you can probably tell, I know just enough to make this work (with a little bit of extra help from Garrett). I compiled the original Greggs location list myself, using data from the Food Standards Agency, but I have now replaced this with data from Greggs - thanks to [Jason Cartwright](https://twitter.com/jasoncartwright) for pointing me to the [source](https://production-digital.greggs.co.uk/api/v1.0/shops).

If you want to make your own, all you need to do is put a json file in the data folder with data you want to use, change the name of the json file in `index.html` to match the name of your own file, and then edit line 81 so that it references a unique column in your json file. 

So, in the example below, I added `shopCode` to the `n.properties.` and `nearest.properties` variables. If you don't do this, you'll only see a single line on the map. Thanks to Garrett for pointing this out to me.

`const index = cleanedAirports.features.findIndex(n => n.properties.shopCode === nearest.properties.shopCode)`


>**Note**: the Greggs location data was last updated on 11 May 2025.

>**Warning**: You may end up wasting lots of time playing with this.
