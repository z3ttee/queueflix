import Image from "next/image";

export type CarouselItem ={
    name: string;
    image: string;
    description: string;
    stats: {
        label: string;
        value: string;
    }[]
}

export default function CarouselCard(props: CarouselItem) {

    return (
        <div className="aspect-[2/3] w-44 border rounded transform-gpu will-change-transform hover:scale-150 hover:w-56 transition-all">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src={props.image} alt={props.name} fill={true} objectFit="cover" />
            </div>
        </div>
    )
}