const onboarding_screens = [
  {
    id: 1,
    backgroundImage: require('../../assets/images/background_01.png'),
    bannerImage: require('../../assets/images/favourite_food.png'),
    title: 'Choose a Favourite Food',
    description:
      'When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards',
  },
  {
    id: 2,
    backgroundImage: require('../../assets/images/background_02.png'),
    bannerImage: require('../../assets/images/hot_delivery.png'),
    title: 'Hot Delivery to Home',
    description:
      'We make food ordering fasr, simple and free-no matter if you order online or cash',
  },
  {
    id: 3,
    backgroundImage: require('../../assets/images/background_01.png'),
    bannerImage: require('../../assets/images/great_food.png'),
    title: 'Receive the Great Food',
    description:
      'You’ll receive the great food within a hour. And get free delivery credits for every order.',
  },
];

const screens = {
  main_layout: 'MainLayout',
  home: 'Home',
  search: 'Search',
  cart: 'Cart',
  favourite: 'Favourite',
  notification: 'Notification',
  my_wallet: 'My Wallet',
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
];

const track_order_status = [
  {
    id: 1,
    title: 'Order Confirmed',
    sub_title: 'Your order has been received',
    status: true
  },
  {
    id: 2,
    title: 'Order Prepared',
    sub_title: 'Your order has been prepared',
    status: false
  },
  {
    id: 3,
    title: 'Delivery in Progress',
    sub_title: 'Hang on! Your food is on the way',
    status: false
  },
  {
    id: 4,
    title: 'Delivered',
    sub_title: 'Enjoy your meal!',
    status: false
  },
  {
    id: 5,
    title: 'Rate Us',
    sub_title: 'Help us improve our service',
    status: false
  },
];

const GOOGLE_MAP_API_KEY = '';

const CHECK_ICON = 'checkmark-circle-outline';
const CLOSE_ICON = 'close-circle-outline';
const DELIVERY_HEADER = 'DELIVERY STATUS';
const common = {
  ESTIMATED_DELIVERY: 'Estimated Delivery',
  DELIVERY_DATE_TIME: '12 Sept 2020/ 12:30PM',
  TRACK_ORDER: 'Track Order',
  ORDER_ID: 'NY0215NI',
  PLEASE_RATE: 'Please rate Delivery Service'
};

const settings = [
  {
      id: 1,
      name: 'Change Password',
      navigate: '',
      icon: require('../../assets/icons/lock.png')
  },
  {
      id: 2,
      name: 'Preferences',
      navigate: '',
      icon: require('../../assets/icons/filter.png')
  },
  {
      id: 3,
      name: 'Notification',
      navigate: '',
      icon: require('../../assets/icons/notification.png')
  },
  {
      id: 4,
      name: 'Data use',
      navigate: '',
      icon: require('../../assets/icons/graph.png')
  },
  {
      id: 5,
      name: 'Check Update',
      navigate: '',
      icon: require('../../assets/icons/reload.png')
  },
  {
      id: 6,
      name: 'Contact Us',
      navigate: '',
      icon: require('../../assets/icons/call.png')
  },
  {
      id: 7,
      name: 'Privacy Policy',
      navigate: '',
      icon: require('../../assets/icons/privacy.png')
  },
  {
      id: 8,
      name: 'Terms & Conditions',
      navigate: '',
      icon: require('../../assets/icons/terms.png')
  },
  {
      id: 9,
      name: 'Logout',
      navigate: '',
      icon: require('../../assets/icons/logout.png')
  },

]

export default {
  onboarding_screens,
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
  track_order_status,
  GOOGLE_MAP_API_KEY,
  CHECK_ICON,
  CLOSE_ICON,
  DELIVERY_HEADER,
  common,
  settings
};
