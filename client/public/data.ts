import { IProduct } from "@/interfaces/products.interface";

const productsToPreLoad: IProduct[] = [
    {
        name: "iPhone 11",
        price: 699,
        description:
            "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image:
            "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-wallpaper-screen-091019_inline.jpg.large.jpg",
        categoryId: 1,
        stock: 10,
    },
    {
        name: "MacBook Air",
        price: 999,
        description:
            "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367845124",
        categoryId: 2,
        stock: 10,
    },
    {
        name: "iPad Pro",
        price: 799,
        description:
            "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2021?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1674663704665",
        categoryId: 3,
        stock: 10,
    },
    {
        name: "Apple Watch Series 6",
        price: 399,
        description:
            "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image:
            "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-always-on-display_09152020_inline.jpg.large.jpg",
        categoryId: 4,
        stock: 10,
    },
    {
        name: "AirPods Pro",
        price: 249,
        description:
            "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
        image:
            "https://www.apple.com/newsroom/images/2023/09/apple-introduces-new-airpods-pro-2nd-generation/article/Apple-AirPods-Pro-2nd-generation-USB-C-connection-230912_inline.jpg.large.jpg",
        categoryId: 5,
        stock: 10,
    },
    {
        name: "HomePod mini",
        price: 99,
        description:
            "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image:
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-white-202110_FV1?wid=1868&hei=880&fmt=jpeg&qlt=90&.v=1633086025000",
        categoryId: 6,
        stock: 10,
    },
];

export default productsToPreLoad;
