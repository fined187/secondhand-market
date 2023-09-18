import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

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
    if(!currentUser) return;
    try {
      let request;
      if(hasFavorite) {
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        request = () => axios.post(`/api/favorites/${productId}`);
      }
      await request();
      router.refresh();
    } catch (error) {
      
    }
  };

  return {
    hasFavorite,
    toggleFavorite
  }
};

export default useFavorite;