import Image from "next/image";
import { HeaderSearch, Logo } from "./input";

export default function Component({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  console.log(searchParams);
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <header className="flex justify-between items-center py-4 bg-[#0d5257] ">
        <nav className="flex space-x-4 container max-w-7xl mx-auto">
          <Logo />
        </nav>
      </header>
      <main className="container max-w-7xl mx-auto">
        <HeaderSearch />
        <div className="flex justify-between items-center mb-8 py-2">
          <span className="text-sm text-gray-400">Showing 98 items</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Supply Nova"
            brand="Herschel"
            tag="Recycled"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Supply Nova"
            brand="Brand"
            tag="Recycled"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Pinky Shoe"
            brand="Brand"
            tag="Vegan"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Sweater"
            brand="Brand"
            tag="Merino"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Supply Nova"
            brand="Herschel"
            tag="Cactus Leather"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Supply Nova"
            brand="Brand"
            tag="Recycled"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Supply Nova"
            brand="Brand"
            tag="Vegan"
          />
          <ProductCard
            image="/placeholder.svg?height=200&width=200"
            title="Ralf chair"
            brand="Brand"
            tag="Wood"
          />
        </div>
      </main>
    </div>
  );
}

function ProductCard({ image, title, brand, tag }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs rounded">
          {tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
      </div>
    </div>
  );
}
