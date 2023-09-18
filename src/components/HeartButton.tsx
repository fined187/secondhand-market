import useFavorite from "@/app/hooks/useFavorite";
import { User } from "@prisma/client";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

interface HeartButtonProps {
  productId: string;
  currentUser?: User | null;
};

export default function HeartButton({
  productId,
  currentUser,
}: HeartButtonProps) {
  const { hasFavorite, toggleFavorite } = useFavorite({ productId, currentUser });
  return (
    <div 
      onClick={toggleFavorite}
      className="relative transition cursor-pointer hover:opacity-80">
      <AiOutlineHeart 
        size={28}
        className="fill-white absolute top-0 left-0"
      />
      <AiFillHeart 
        size={24}
        className={ hasFavorite ? `absolute top-0 left-0 fill-rose-500` : 'fill-neutral-500/70'}
      />
    </div>
  )
};