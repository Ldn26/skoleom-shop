const mainCategories = [
  {
    id: 1,
    slug: "womens-fashion",
    name: "Women's Fashion",
    subCategories: [
      { id: 1, slug: "dresses", name: "Dresses" },
      { id: 2, slug: "tops-t-shirts", name: "Tops & T-Shirts" },
      { id: 3, slug: "pants-jeans", name: "Pants & Jeans" },
      { id: 4, slug: "skirts", name: "Skirts" },
      { id: 5, slug: "jackets-coats", name: "Jackets & Coats" },
      { id: 6, slug: "lingerie", name: "Lingerie" },
      { id: 7, slug: "sportswear", name: "Sportswear" },
    ],
  },

  {
    id: 2,
    slug: "mens-fashion",
    name: "Men's Fashion",
    subCategories: [
      { id: 8, slug: "t-shirts-polos", name: "T-Shirts & Polos" },
      { id: 9, slug: "shirts", name: "Shirts" },
      { id: 10, slug: "pants-jeans", name: "Pants & Jeans" },
      { id: 11, slug: "suits", name: "Suits" },
      { id: 12, slug: "jackets-coats", name: "Jackets & Coats" },
      { id: 13, slug: "underwear", name: "Underwear" },
      { id: 14, slug: "sportswear", name: "Sportswear" },
    ],
  },

  {
    id: 3,
    name: "Kids' Fashion",
    subCategories: [
      { id: 15, slug: "girls-clothing", name: "Girls' Clothing" },
      { id: 16, slug: "boys-clothing", name: "Boys' Clothing" },
      { id: 17, slug: "baby-clothing", name: "Baby Clothing" },
      { id: 18, slug: "kids-shoes", name: "Kids' Shoes" },
      { id: 19, slug: "kids-accessories", name: "Kids' Accessories" },
    ],
  },

  {
    id: 4,
    name: "Shoes",
    slug: "shoes",
    subCategories: [
      { id: 20, slug: "sneakers", name: "Sneakers" },
      { id: 21, slug: "womens-shoes", name: "Women's Shoes" },
      { id: 22, slug: "mens-shoes", name: "Men's Shoes" },
      { id: 23, slug: "boots-ankle-boots", name: "Boots & Ankle Boots" },
      { id: 24, slug: "sandals", name: "Sandals" },
      { id: 25, slug: "sports-shoes", name: "Sports Shoes" },
    ],
  },

  {
    id: 5,
    name: "Bags & Accessories"  , 
    slug: "bags-accessories",
    subCategories: [
      { id: 26, slug: "handbags", name: "Handbags" },
      { id: 27, slug: "backpacks", name: "Backpacks" },
      { id: 28, slug: "wallets", name: "Wallets" },
      { id: 29, slug: "belts", name: "Belts" },
      { id: 30, slug: "hats-caps", name: "Hats & Caps" },
      { id: 31, slug: "sunglasses", name: "Sunglasses" },
      { id: 32, slug: "scarves-gloves", name: "Scarves & Gloves" },
    ],
  },

  {
    id: 6,
    name: "Jewelry & Watches",
    slug: "jewelry-watches",
    subCategories: [
      { id: 33, slug: "rings", name: "Rings" },
      { id: 34, slug: "necklaces", name: "Necklaces" },
      { id: 35, slug: "bracelets", name: "Bracelets" },
      { id: 36, slug: "earrings", name: "Earrings" },
      { id: 37, slug: "watches", name: "Watches" },
    ],
  },

  {
    id: 7,
    name: "Sports & Fitness",
    slug: "sports-fitness",
    subCategories: [
      { id: 38, slug: "sportswear", name: "Sportswear" },
      { id: 39, slug: "sports-shoes", name: "Sports Shoes" },
      { id: 40, slug: "fitness-equipment", name: "Fitness Equipment" },
      { id: 41, slug: "sports-accessories", name: "Sports Accessories" },
    ],
  },

  {
    id: 8,
    name: "Beauty & Personal Care",
    slug: "beauty-personal-care",
    subCategories: [
      { id: 42, slug: "makeup", name: "Makeup" },
      { id: 43, slug: "perfumes", name: "Perfumes" },
      { id: 44, slug: "skincare", name: "Skincare" },
      { id: 45, slug: "hair-care", name: "Hair Care" },
      { id: 46, slug: "body-care", name: "Body Care" },
    ],
  },

  {
    id: 9,
    name: "Home & Decoration",
    slug: "home-decoration",
    subCategories: [
      { id: 47, slug: "home-decor", name: "Home Decor" },
      { id: 48, slug: "furniture", name: "Furniture" },
      { id: 49, slug: "kitchen", name: "Kitchen" },
      { id: 50, slug: "home-textiles", name: "Home Textiles" },
      { id: 51, slug: "lighting", name: "Lighting" },
    ],
  },

  {
    id: 10,
    name: "Electronics",
    slug: "electronics",
    subCategories: [
      { id: 52, slug: "smartphones", name: "Smartphones" },
      { id: 53, slug: "computers-laptops", name: "Computers & Laptops" },
      { id: 54, slug: "headphones-earbuds", name: "Headphones & Earbuds" },
      { id: 55, slug: "phone-accessories", name: "Phone Accessories" },
      { id: 56, slug: "smartwatches", name: "Smartwatches" },
    ],
  },
];

export default mainCategories;