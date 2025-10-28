// we will be using this dummy data,
// don't worry, you can find this data in the git repo
// you can find the git repo link in the description ;)

export const categories = [
  {
    id: 1,
    title: "All",
    image: require("../assets/images/cat-5.jpg"),
  },
  {
    id: 2,
    title: "Fruits",
    image: require("../assets/images/cat-1.jpg"),
  },
  {
    id: 3,
    title: "Dairy",
    image: require("../assets/images/cat-2.jpg"),
  },
  {
    id: 4,
    title: "Spreads",
    image: require("../assets/images/cat-3.jpg"),
  },
  {
    id: 5,
    title: "Vegetables",
    image: require("../assets/images/cat-4.jpg"),
  },
  {
    id: 6,
    title: "Grains",
    image: require("../assets/images/cat-5.jpg"),
  },
  {
    id: 7,
    title: "Bakery",
    image: require("../assets/images/cat-2.jpg"),
  },
  {
    id: 8,
    title: "Beverages",
    image: require("../assets/images/cat-3.jpg"),
  },
];

export const products = [
  {
    id: 1,
    name: "Fresh Organic Strawberries",
    price: "25.50",
    category: "Fruits",
    stars: "4.6",
    image: require("../assets/images/product11.jpg"),
    desc: "Freshly handpicked from the lush fields of SweetBerry Farm, these bright red strawberries are juicy, fragrant, and bursting with natural sweetness. Perfect for snacking, blending into smoothies, or adding a colorful touch to your desserts. Each berry is grown using sustainable farming practices to ensure unmatched freshness and flavor in every bite.",
    isFavorite: false
  },

  {
    id: 2,
    name: "GreenValley Watermelons",
    price: "15.50",
    category: "Fruits",
    stars: "4.3",
    image: require("../assets/images/Shop-1.png"),
    desc: "Our GreenValley Watermelons are grown under the warm summer sun to achieve the perfect balance of sweetness and hydration. Crisp, refreshing, and filled with natural electrolytes, this watermelon is a must-have for picnics and family gatherings. Each slice delivers a burst of juiciness that keeps you cool and refreshed all day long.",
    isFavorite: false
  },

  {
    id: 3,
    name: "GoldenHarvest Tomatoes",
    price: "30.00",
    category: "Vegetables",
    stars: "4.0",
    image: require("../assets/images/Shop-2.webp"),
    desc: "GoldenHarvest Tomatoes are vine-ripened to perfection, offering a rich, tangy flavor ideal for sauces, salads, and everyday cooking. Packed with antioxidants like lycopene, they add vibrant color and nutritional goodness to your meals. Our tomatoes are carefully selected to ensure every bite is fresh, firm, and full of natural taste.",
    isFavorite: false
  },

  {
    id: 4,
    name: "Rootrise beetroots",
    price: "10.30",
    category: "Vegetables",
    stars: "3.5",
    image: require("../assets/images/Shop-3.png"),
    desc: "RootRise Beetroots are freshly harvested and full of earthy sweetness. Known for their deep ruby color and smooth texture, these beets are a powerhouse of nutrients — perfect for juicing, roasting, or adding to salads. Naturally rich in iron and fiber, they’re a great way to bring color and vitality to your diet.",
    isFavorite: false
  },

  {
    id: 5,
    name: "SunnySide Farm Fresh Eggs",
    price: "23.10",
    category: "Dairy",
    stars: "4.7",
    image: require("../assets/images/Shop-4.png"),
    desc: "Collected daily from free-range hens raised on natural feed, SunnySide Eggs promise golden yolks and rich flavor in every shell. Whether you’re frying, baking, or boiling, these eggs deliver consistent quality and freshness. High in protein and packed with essential vitamins, they’re a wholesome choice for any meal.",
    isFavorite: false
  },

  {
    id: 6,
    name: "CountryGold Fresh Chicken",
    price: "5.99",
    category: "Meat & Poultry",
    stars: "4.7",
    image: require("../assets/images/Shop-5.png"),
    desc: "CountryGold Fresh Chicken is sourced from trusted local farms where birds are naturally raised without added hormones. Tender, juicy, and full of flavor, it’s perfect for grilling, roasting, or creating hearty stews. Each cut is carefully processed and packed to maintain freshness and ensure premium taste in every dish.",
    isFavorite: false
  },

  {
    id: 7,
    name: "HillCrop Irish Potatoes",
    price: "18.50",
    category: "Vegetables",
    stars: "4.5",
    image: require("../assets/images/Shop-6.png"),
    desc: "HillCrop Irish Potatoes are grown in nutrient-rich highland soils, giving them their distinct creamy texture and buttery taste. Perfect for mashing, roasting, or frying, they cook evenly and maintain a fluffy interior. Loved for their versatility, these potatoes bring warmth and comfort to every homemade meal.",
    isFavorite: false
  },

  {
    id: 8,
    name: "OceanCatch Fresh Fish Fillets",
    price: "21.00",
    category: "Dairy",
    stars: "4.6",
    image: require("../assets/images/Shop-7.png"),
    desc: "OceanCatch Fish Fillets are expertly selected from sustainably sourced, wild-caught fish to bring you the freshest taste from the sea. Each fillet is carefully cleaned, boneless, and ready to cook — perfect for grilling, baking, or pan-searing. With their tender texture and delicate flavor, these fillets make it easy to prepare healthy, restaurant-quality meals at home. Packed with lean protein and omega-3 fatty acids, they’re a delicious and nutritious choice for any seafood lover.",
    isFavorite: false
  },

  {
    id: 9,
    name: "GreenLeaf Broccoli Florets",
    price: "12.99",
    category: "Vegetables",
    stars: "4.7",
    image: require("../assets/images/Shop-8.png"),
    desc: "GreenLeaf Broccoli is freshly harvested to deliver a crisp texture and mild flavor that complements any dish. Packed with vitamins, minerals, and antioxidants, it’s one of the healthiest greens for your diet. Whether you steam it, stir-fry it, or enjoy it raw, each floret provides a natural crunch and fresh garden taste.",
    isFavorite: false
  },

  {
    id: 10,
    name: "TropicalGold Bananas",
    price: "13.10",
    category: "Fruits",
    stars: "4.8",
    image: require("../assets/images/Shop-11.png"),
    desc: "TropicalGold Bananas are naturally ripened on the tree, ensuring maximum sweetness and soft, creamy texture. Ideal for breakfast, smoothies, or healthy snacking, they’re rich in potassium and energy-boosting nutrients. Each bunch is carefully handpicked to deliver a consistent taste of tropical freshness.",
    isFavorite: false
  },
];
// export const recommendedItems = [
//   {
//     id: 1,
//     name: "Black Coffee",
//     price: "25.50",
//     category: "Fresh Beef",
//     stars: "4.6",
//     image: require("../assets/images/coffee1.png"),
//     desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
//   },

//   {
//     id: 2,
//     name: "Cappuccino",
//     price: "15.50",
//     category: "Fried Chicken",
//     stars: "4.3",
//     image: require("../assets/images/coffee2.png"),
//     desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
//   },

//   {
//     id: 3,
//     name: "Espresso",
//     price: "30.00",
//     category: "Cheese burger",
//     stars: "4.0",
//     image: require("../assets/images/coffee3.png"),
//     desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
//   },

//   {
//     id: 4,
//     name: "Latte",
//     price: "10.30",
//     category: "Egg Sandwich",
//     stars: "3.5",
//     image: require("../assets/images/coffee4.png"),
//     desc: "The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.",
//   },
// ];
