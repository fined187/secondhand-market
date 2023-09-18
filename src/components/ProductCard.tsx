'use client';
import { Product, User } from "@prisma/client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";
import { TProduct, TUser } from "@/types";

interface ProductCardProps {
  data: TProduct;
  currentUser?: TUser | null;
};

export default function ProductCard({
  data,
  currentUser,
}: any) {
  const router = useRouter();
  return (
    <>
      <div 
      onClick={() => {
        router.push(`/products/${data.id}`);
      }}
      className="col-span-1 cursor-pointer group">
        <div className="flex flex-col w-full gap-2">
          <div className="relative w-full overflow-hidden aspect-square rounded-xl">
            <Image
              src={data.imageSrc}
              fill
              sizes="auto"
              className="object-cover w-full h-full transition group-hover:scale-100"
              alt="product"
            />
            <div
              className="absolute top-3 rigth-3"
            >
              <HeartButton 
                productId={data.id}
                currentUser={currentUser}
              />
            </div>
          </div>
          <div className="text-lg font-semibold">
            {data.title}
          </div>
          <div className="font-light text-neutral-500">
            {data.category}
          </div>
          <div>
            <div>
              {data.price}{" "}
              <span className="font-light"></span>
            </div>
            <div>
              {/* {data.createdAt} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};