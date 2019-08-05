// This is where I would write the GQL query to get all restaurants
// from a GQL server. I prefer to implement Apollo's Client/Server
// packages.

// query GetRestuarantTypes {
//   getRestaurantTypes {
//     type
//     color
//   }
// }

// Data returned from query above:
export default [
  {
    type: 'Brewpub',
    color: '#1abc9c',
  },
  {
    type: 'Cafe',
    color: '#9b59b6',
  },
  {
    type: 'Sushi',
    color: '#e67e22',
  },
  {
    type: 'Diner',
    color: '#f1c40f',
  },
  {
    type: 'Restaurant',
    color: '#e74c3c',
  },
];
