const TestableCategories = [
  {
    id: 1,
    slug: 'womens-fashion',
    name: "Women's Fashion",
    subCategories: [
      { id: 1, slug: 'dresses', name: 'Dresses' },
      { id: 2, slug: 'tops-t-shirts', name: 'Tops & T-Shirts' },
      { id: 3, slug: 'pants-jeans', name: 'Pants & Jeans' },
      { id: 4, slug: 'skirts', name: 'Skirts' },
      { id: 5, slug: 'jackets-coats', name: 'Jackets & Coats' },
      { id: 6, slug: 'lingerie', name: 'Lingerie' },
      { id: 7, slug: 'sportswear', name: 'Sportswear' },
    ],
  },

  {
    id: 2,
    slug: 'mens-fashion',
    name: "Men's Fashion",
    subCategories: [
      { id: 8, slug: 't-shirts-polos', name: 'T-Shirts & Polos' },
      { id: 9, slug: 'shirts', name: 'Shirts' },
      { id: 10, slug: 'pants-jeans', name: 'Pants & Jeans' },
      { id: 11, slug: 'suits', name: 'Suits' },
      { id: 12, slug: 'jackets-coats', name: 'Jackets & Coats' },
      { id: 13, slug: 'underwear', name: 'Underwear' },
      { id: 14, slug: 'sportswear', name: 'Sportswear' },
    ],
  },

  {
    id: 3,
    name: "Kids' Fashion",
    subCategories: [
      { id: 15, slug: 'girls-clothing', name: "Girls' Clothing" },
      { id: 16, slug: 'boys-clothing', name: "Boys' Clothing" },
      { id: 17, slug: 'baby-clothing', name: 'Baby Clothing' },
      { id: 18, slug: 'kids-shoes', name: "Kids' Shoes" },
      { id: 19, slug: 'kids-accessories', name: "Kids' Accessories" },
    ],
  },

  {
    id: 4,
    name: 'Shoes',
    slug: 'shoes',
    subCategories: [
      { id: 20, slug: 'sneakers', name: 'Sneakers' },
      { id: 21, slug: 'womens-shoes', name: "Women's Shoes" },
      { id: 22, slug: 'mens-shoes', name: "Men's Shoes" },
      { id: 23, slug: 'boots-ankle-boots', name: 'Boots & Ankle Boots' },
      { id: 24, slug: 'sandals', name: 'Sandals' },
      { id: 25, slug: 'sports-shoes', name: 'Sports Shoes' },
    ],
  },

  {
    id: 6,
    name: 'Jewelry & Watches',
    slug: 'jewelry-watches',
    subCategories: [
      { id: 33, slug: 'rings', name: 'Rings' },
      { id: 34, slug: 'necklaces', name: 'Necklaces' },
      { id: 35, slug: 'bracelets', name: 'Bracelets' },
      { id: 36, slug: 'earrings', name: 'Earrings' },
      { id: 37, slug: 'watches', name: 'Watches' },
    ],
  },

  {
    id: 7,
    name: 'Sports & Fitness',
    slug: 'sports-fitness',
    subCategories: [
      { id: 38, slug: 'sportswear', name: 'Sportswear' },
      { id: 39, slug: 'sports-shoes', name: 'Sports Shoes' },
      { id: 40, slug: 'fitness-equipment', name: 'Fitness Equipment' },
      { id: 41, slug: 'sports-accessories', name: 'Sports Accessories' },
    ],
  },
];

export default TestableCategories;
