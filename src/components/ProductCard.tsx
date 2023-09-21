'use client';
import { Product, User } from "@prisma/client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "./HeartButton";
import { TProduct, TUser } from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ko';
import { fromNow } from "@/helpers/dayjs";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface ProductCardProps {
  data: any;
  currentUser?: any;
};

export default function ProductCard({
  data,
  currentUser,
}: ProductCardProps) {
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
          <div className="flex flex-row items-center justify-between gap-1">
            <div>
              {data.price}{" "}
              <span className="font-light"></span>
            </div>
            <div>
              {
                fromNow(data.createdAt)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
};