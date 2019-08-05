// This is where I would write the GQL query to get all restaurants
// from a GQL server. I prefer to implement Apollo's Client/Server
// packages.

// query GetRestuarants {
//   getRestaurants {
//     id
//     name
//     type
//     phone
//     website
//     image
//   }
// }

// Data returned from query above:
export default [
  {
    id: 1,
    name: 'Breken Kitchen',
    phone: '(503) 841-6359',
    type: 'Cafe',
    website: 'http://www.brekenkitchen.com',
    image: 'http://lorempixel.com/200/200/food/',
  },
  {
    id: 2,
    name: 'Cascade Cafe',
    phone: '(971) 207-4202',
    type: 'Cafe',
    website: 'cascadiacoffee.net',
    image: 'http://lorempixel.com/200/200/food/',
  },
  {
    id: 3,
    name: 'JST Seafood Market',
    type: 'Sushi',
    phone: '(503) 972-1140',
    website: null,
    image: 'http://lorempixel.com/200/200/food/',
  },
  {
    id: 4,
    name: 'Breakside Brewing',
    type: 'Brewpub',
    phone: '(503) 444-7597',
    website: 'breakside.com',
    image: 'http://lorempixel.com/200/200/food/',
  },
  {
    id: 5,
    name: 'Lucky Labrador',
    type: 'Brewpub',
    phone: '(503) 517-4352',
    website: 'luckylab.com',
    image: 'http://lorempixel.com/200/200/food/',
  },
  {
    id: 6,
    name: 'Dockside Saloon & Restaurant',
    type: 'Diner',
    phone: '(503) 241-6433',
    website: 'docksidesaloon.com',
    image: 'http://lorempixel.com/500/500/food/',
  },
  {
    id: 7,
    name: 'Olympia Provisions',
    type: 'Restaurant',
    phone: '(503) 894-8136',
    website: 'olympiaprovisions.com',
    image: 'http://lorempixel.com/300/300/food/',
  },
  {
    id: 8,
    name: 'The Sultan Cafe',
    type: 'Cafe',
    phone: '(503) 227-6466',
    website: 'thesultancafe.com',
    image: 'http://lorempixel.com/200/200/food/',
  },
  {
    id: 9,
    name: 'Justa Pasta',
    type: 'Restaurant',
    phone: '(503) 243-2249',
    website: 'justapasta.com',
    image: 'http://lorempixel.com/512/256/food/',
  },
  {
    id: 10,
    name: 'Boke Bowl',
    type: 'Restaurant',
    phone: '(503) 719-5698',
    website: 'http://places.singleplatform.com/boke-bowl-0/menu',
    image: 'http://lorempixel.com/200/200/food/',
  },
];
