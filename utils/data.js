import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Apeli',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

    products: [
      {
        name: 'Free Shirt',
        category: 'Shirts',
        image: '/images/nikeshirt.jpg',
        price: 70,
        brand: 'Nike',
        rating: 4.5,
        slug: 'free-shirt',
        numReviews: 10,
        countInStock: 20,
        description: 'A popular shirt',
      },
      {
        name: 'Fit Shirt',
        category: 'Shirts',
        image: '/images/adidasshirt.jpg',
        price: 80,
        brand: 'Adidas',
        slug: 'fit-shirt',
        rating: 4.2,
        numReviews: 10,
        countInStock: 20,
        description: 'A popular shirt',
      },
      {
        name: 'Jordans',
        category: 'Shirts',
        image: '/images/jordans.jpg',
        price: 90,
        brand: 'jordans',
        slug: 'jordans',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'A popular shoe',
      },
      {
        name: 'Sweat Pants',
        category: 'Pants',
        image: '/images/sweatpants.jpg',
        price: 90,
        brand: 'African',
        slug: 'sweat-pants',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'Smart looking pants',
      },
      {
        name: 'Fit Pants',
        category: 'Pants',
        image: '/images/zarapants.jpg',
        price: 95,
        brand: 'Zara',
        slug: 'fit-pants',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'A popular pants',
      },
      {
        name: 'Classic Pants',
        category: 'Pants',
        image: '/images/classicpants.jpg',
        price: 75,
        brand: 'Casely',
        slug: 'classic-pants',
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: 'A popular pants',
      },
    ],
  };
  export default data;