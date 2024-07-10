import Image from "next/image";

export default function Carousel() {
    return (
        <div className="daisy-carousel w-full relative overflow-hidden h-96 z-0">
            <div className="daisy-carousel-item slider-efecto">
                <Image
                    src="https://rtlimages.apple.com/cmc/dieter/store/16_9/R204.png?resize=750:422&output-format=jpg&output-quality=85&interpolation=progressive-bicubic"
                    alt="Olga"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="daisy-carousel-item slider-efecto">
                <Image
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-og-202110?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1632930650000"
                    alt="Olga"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="daisy-carousel-item slider-efecto">
                <Image
                    src="https://www.apple.com/newsroom/images/product/availability/geo/Apple-September-2022-launch-hero-geo.jpg.og.jpg?202405162324"
                    alt="Olga"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="daisy-carousel-item slider-efecto">
                <Image
                    src="https://www.apple.com/v/mac/home/ca/images/meta/mac__c3zv0c86zu0y_og.png"
                    alt="Olga"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </div>
    )
}