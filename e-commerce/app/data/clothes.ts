interface ClothingItem {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    sizes: string[];
    image: string; // Add an image property
  }
  
  const dummyClothes: ClothingItem[] = [
    {
      id: 0,
      name: 'Utility Jacket',
      price: 110,
      inStock: true,
      sizes: ['XS', 'S', 'L', 'XL'],
      image: 'https://example.com/images/utility-jacket.jpg'
    },
    {
      id: 1,
      name: 'Denim Jeans',
      price: 75,
      inStock: true,
      sizes: ['28', '30', '32', '34', '36'],
      image: 'https://example.com/images/denim-jeans.jpg'
    },
    {
      id: 2,
      name: 'Graphic T-Shirt',
      price: 25,
      inStock: false,
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://example.com/images/graphic-tshirt.jpg'
    },
    {
      id: 3,
      name: 'Wool Sweater',
      price: 60,
      inStock: true,
      sizes: ['XS', 'S', 'M', 'L'],
      image: 'https://example.com/images/wool-sweater.jpg'
    },
    {
      id: 4,
      name: 'Leather Boots',
      price: 150,
      inStock: true,
      sizes: ['8', '9', '10', '11'],
      image: 'https://example.com/images/leather-boots.jpg'
    },
    {
      id: 5,
      name: 'Cotton Shorts',
      price: 35,
      inStock: false,
      sizes: ['S', 'M', 'L'],
      image: 'https://example.com/images/cotton-shorts.jpg'
    },
    {
      id: 6,
      name: 'Hooded Sweatshirt',
      price: 45,
      inStock: true,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://example.com/images/hooded-sweatshirt.jpg'
    },
    {
      id: 7,
      name: 'Cargo Pants',
      price: 70,
      inStock: true,
      sizes: ['30', '32', '34', '36', '38'],
      image: 'https://example.com/images/cargo-pants.jpg'
    },
    {
      id: 8,
      name: 'Polo Shirt',
      price: 40,
      inStock: false,
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://example.com/images/polo-shirt.jpg'
    },
    {
      id: 9,
      name: 'Summer Dress',
      price: 55,
      inStock: true,
      sizes: ['XS', 'S', 'M', 'L'],
      image: 'https://example.com/images/summer-dress.jpg'
    },
    {
      id: 10,
      name: 'Winter Coat',
      price: 120,
      inStock: true,
      sizes: ['M', 'L', 'XL'],
      image: 'https://example.com/images/winter-coat.jpg'
    }
  ];
  
      
      
export {dummyClothes}