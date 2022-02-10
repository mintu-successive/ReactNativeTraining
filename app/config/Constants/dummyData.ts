const myProfile = {
  name: 'ByProgrammers',
  profile_image: require('../../assets/images/profile.png'),
  address: 'No. 88, Jln Padungan, Kuching',
  rating: 4,
  number: '111-222-3333',
  id: '111 2222',
  card: 'Not Updated',
  dob: '03/03/1990',
  gender: 'Male',
  joined: 'March 2017',
  email: 'byprogrammers@gmail.com',
  fullAddress: 'Jalan Padungan, 93100\nKuching, Sarawak, Malaysia',
};

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    icon: require('../../assets/icons/burger.png'),
  },
  {
    id: 2,
    name: 'Fruit Item',
    icon: require('../../assets/icons/cherry.png'),
  },
  {
    id: 3,
    name: 'Rice Item',
    icon: require('../../assets/icons/rice.png'),
  },
];

const deliveryTimes = [
  {
    id: 1,
    time: 10,
  },
  {
    id: 2,
    time: 20,
  },
  {
    id: 3,
    time: 30,
  },
];

const hamburger = {
  id: 1,
  name: 'Hamburger',
  description: 'Chicken patty hamburger',
  categories: 1,
  price: 15.99,
  calories: 78,
  isFavourite: true,
  image: require('../../assets/dummyData/hamburger.png'),
  rating: 4.5,
  delivery_time: '30 Mins',
  shipping: 'Free shipping',
};

const hotTacos = {
  id: 2,
  name: 'Hot Tacos',
  description: 'Mexican tortilla & tacos',
  categories: 2,
  price: 10.99,
  calories: 79,
  isFavourite: false,
  image: require('../../assets/dummyData/hot_tacos.png'),
  rating: 4.5,
  delivery_time: '30 Mins',
  shipping: 'Free shipping',
};

const vegBiryani = {
  id: 3,
  name: 'Veg Biryani',
  description:
    'A popular spice and vegetables mixed favoured rice dish which is typically prepared by layering the biryani gravy and basmati rice in flat bottom vessel.',
  categories: 3,
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../../assets/dummyData/veg_biryani.png'),
  rating: 4.5,
  delivery_time: '30 Mins',
  shipping: 'Free shipping',
};

const wrapSandwich = {
  id: 4,
  name: 'Wrap Sandwich',
  description: 'Grilled vegetables sandwich',
  categories: 1,
  price: 10.99,
  calories: 78,
  isFavourite: true,
  image: require('../../assets/dummyData/wrap_sandwich.png'),
  rating: 4.5,
  delivery_time: '30 Mins',
  shipping: 'Free shipping',
};

const pizzaHut = {
  name: 'Pizza Hut',
  timestamp: '19 Sep, 14:30',
  quantity: '3 items',
  status: true,
  price: '$35.30',
  image: require('../../assets/dummyData/pizza_hut.png'),
  order_id: '#18888',
  discount: '20% Off',
  validity: 'Valid until 01 Jan 2022',
};

const kfc = {
  name: 'KFC',
  timestamp: '19 Sep, 12:30',
  quantity: '4 items',
  status: false,
  price: '$55.00',
  image: require('../../assets/dummyData/kfc.png'),
  order_id: '#28888',
  discount: '20% Off',
  validity: 'Valid until 01 Jan 2022',
};

const dominos = {
  name: "Domino's Pizza",
  timestamp: '19 Sep, 14:30',
  quantity: '1 items',
  status: true,
  price: '$15.30',
  image: require('../../assets/dummyData/dominos.png'),
  order_id: '#38888',
  discount: '20% Off',
  validity: 'Valid until 01 Jan 2022',
};

const starbucks = {
  name: 'Starbucks',
  timestamp: '15 Sep, 14:30',
  quantity: '4 items',
  status: true,
  price: '$40.00',
  image: require('../../assets/dummyData/starbucks.png'),
  order_id: '#48888',
  discount: '20% Off',
  validity: 'Valid until 01 Jan 2022',
};

const burgerKing = {
  name: 'Burger King',
  timestamp: '19 Sep, 14:30',
  quantity: '4 items',
  status: true,
  price: '$12.00',
  image: require('../../assets/dummyData/burger_king.png'),
  order_id: '#58888',
  discount: '20% Off',
  validity: 'Valid until 01 Jan 2022',
};

const orders_history = [
  {
    title: '19 Sep 2021',
    data: [pizzaHut, kfc, dominos],
  },
  {
    title: '15 Sep 2021',
    data: [starbucks],
  },
];

const upcoming_orders = [starbucks, kfc];

const latest_orders = [
  {
    title: 'Latest Orders',
    data: [burgerKing, starbucks],
  },
];

const available_coupons = [burgerKing, kfc, pizzaHut, starbucks, dominos];

const used_coupons = [burgerKing, starbucks];

const menu = [
  {
    id: 1,
    name: 'Featured',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: 'Nearby you',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 3,
    name: 'Popular',
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: 'Newest',
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 5,
    name: 'Trending',
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 6,
    name: 'Recommended',
    list: [hamburger, hotTacos, wrapSandwich, vegBiryani],
  },
];

const sizes = [
  {
    id: 1,
    label: '12"',
  },
  {
    id: 2,
    label: '14"',
  },
  {
    id: 3,
    label: '16"',
  },
  {
    id: 4,
    label: '18"',
  },
];

const myCart = [
  {
    ...hamburger,
    qty: 1,
  },
  {
    ...hotTacos,
    qty: 1,
  },
  {
    ...vegBiryani,
    qty: 1,
  },
];

const myCards = [
  {
    id: 1,
    name: 'Master Card',
    icon: require('../../assets/icons/mastercard.png'),
    card_no: '1234',
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: require('../../assets/icons/google.png'),
    card_no: '1234',
  },
];

const allCards = [
  {
    id: 1,
    name: 'Apple Pay',
    icon: require('../../assets/icons/apple.png'),
  },
  {
    id: 2,
    name: 'Visa',
    icon: require('../../assets/icons/visa.png'),
  },
  {
    id: 3,
    name: 'PayPal',
    icon: require('../../assets/icons/paypal.png'),
  },
  {
    id: 4,
    name: 'Google Pay',
    icon: require('../../assets/icons/google.png'),
  },
  {
    id: 5,
    name: 'Master Card',
    icon: require('../../assets/icons/mastercard.png'),
  },
];

const fromLocs = [
  {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  },
  {
    latitude: 1.556306570595712,
    longitude: 110.35504616746915,
  },
  {
    latitude: 1.5238753474714375,
    longitude: 110.34261833833622,
  },
  {
    latitude: 1.5578068150528928,
    longitude: 110.35482523764315,
  },
  {
    latitude: 1.558050496260768,
    longitude: 110.34743759630511,
  },
  {
    latitude: 1.5573478487252896,
    longitude: 110.35568783282145,
  },
];

const review = {
  name: 'Williams Adam',
  type: 'Delivery Man',
  status: 'Order Delivered',
};

const add_tips = ['No Tips', '$5', '$10', '$15', '$20'];

const notification = [
  {
    title: 'Notifications',
    desc: 'You will receive daily updates',
    status: true,
    icon: require('../../assets/icons/notification.png'),
  },
  {
    title: 'Promotional Notifications',
    desc: 'You will receive daily updates',
    status: false,
    icon: require('../../assets/icons/notification.png'),
  },
];

export default {
  vegBiryani,
  myProfile,
  categories,
  menu,
  sizes,
  myCart,
  myCards,
  allCards,
  fromLocs,
  orders_history,
  upcoming_orders,
  latest_orders,
  available_coupons,
  used_coupons,
  review,
  add_tips,
  notification
};
