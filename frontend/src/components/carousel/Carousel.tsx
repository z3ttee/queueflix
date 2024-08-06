import CarouselCard, { CarouselItem } from "./CarouselCard";

export function Carousel(props: { items: CarouselItem[] }) {
    const { items } = props;

    const firstItem = items[0];
    const otherItems = items.slice(1);

    return (
        <div className="flex items-end w-full">

            <CarouselCard {...firstItem} />
            {otherItems.map((item, index) => (<CarouselCard {...item} />))}

        </div>
    )
}