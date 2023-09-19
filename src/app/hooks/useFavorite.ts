import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { toast } from "react-toastify";

interface UseFavorite {
  productId: string;
  currentUser?: User | null;
};

const useFavorite = ({ productId, currentUser}: UseFavorite) => {
  const router = useRouter();
  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoritesIds || [];
    return list.includes(productId);
  }, [currentUser, productId]);
  
  const toggleFavorite = async(e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if(!currentUser) {
      toast.warn('로그인이 필요합니다.');
      return
    };
    try {
      let request;
      if(hasFavorite) {
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        request = () => axios.post(`/api/favorites/${productId}`);
      }
      await request();
      router.refresh();
      toast.success('Favorite updated');
    } catch (error) {
      toast.error('실패했습니다.');
    }
  };

  return {
    hasFavorite,
    toggleFavorite
  }
};

export default useFavorite;