import { Carousel } from "@/components/carousel/Carousel";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { CarouselItem } from "@/components/carousel/CarouselCard";
import Image from "next/image";

export default function Home() {
  const items: CarouselItem[] = [
    {
      name: "The Last Of Us",
      image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/igwIPNClQpGVzb61QlGqcpT5zUy.jpg",
      description: "Die 1. Staffel der Endzeit-Horrorserie The Last of Us feierte ihre Premiere am 15. Januar 2023 bei HBO. In Staffel 1 beginnt für den Überlebenden Joel und das Mädchen Ellie eine Reise durch das postapokalyptische Amerika, in dem Plünderer und mutierte Wesen ihnen nach dem Leben trachten.",
      stats: [
        {
          label: "Rating",
          value: "8.5"
        },
        {
          label: "Länge",
          value: "120min"
        },
        {
          label: "Episoden",
          value: "9"
        },
      ]
    },
  ]

  const firstItem = items[0];


  return (
    <main className="flex flex-col items-center justify-center w-full h-full bg-surface text-surface-on">
      <div className="w-full">
        <Header></Header>
      </div>
      <div className="flex-grow overflow-y-auto pt-40 w-[1000px]">
        <div className="relative w-full p-9 rounded-lg overflow-hidden border-4 border-surface-on border-opacity-20 shadow-2xl">
          {/* Background image */}
          <Image className="blur-2xl" src={firstItem.image} alt={firstItem.name} quality={10} fill={true} loading="eager" />

          <div className="grid grid-cols-[max-content,auto] w-full h-full gap-8">
            <div className="relative aspect-[2/3] min-w-52 w-52 shadow-2xl rounded-lg overflow-hidden">
                <Image src={firstItem.image} alt={firstItem.name} fill={true} />
            </div>

            <div className="flex flex-col justify-between items-start relative z-50 p-4">
              <div>
                <h4 className="text-4xl font-black">{firstItem.name}</h4>
              </div>

              <div>
                <p className="text-sm text-surface-on text-opacity-60">{firstItem.description}</p>
              </div>

              <div className="flex items-center justify-start overflow-x-auto gap-6">
                {firstItem.stats.map((stat, index) => (
                  <div className="bg-surface bg-opacity-40 min-w-24 rounded-lg p-4 border border-surface-on border-opacity-10" key={index}>
                    <p className="text-xs text-surface-on text-opacity-60">{stat.label}</p>
                    <p className="font-medium">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-40">
          <div>
            <h6>Aktuelle Warteschlange</h6>
            <p>Das ist eine Liste aller hinzugefügten Filme oder Serien</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </main>
  );
}
