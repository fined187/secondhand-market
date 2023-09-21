import prisma from '@/helpers/prismadb'

export interface ProductParams {
  latitude?: number;
  longitude?: number;
  category?: string;
  page?: number;
  skip?: number;
};

export default async function getProducts(
  params: ProductParams
) {
  try {
    const { latitude, longitude, category } = params;
    let query: any = {};
    if (category) {
      query.category = category;
    }

    if (latitude && longitude) {
      query.latitude = {
        gte: Number(latitude) - 0.1,
        lte: Number(latitude) + 0.1
      }
    };
    if (longitude) {
      query.longitude = {
        gte: Number(longitude) - 0.1,
        lte: Number(longitude) + 0.1
      }
    };

    const totalItems = await prisma.product.count({ where: query});

    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });
    return {
      data: products,
      totalItems
    }
  } catch (error: any) {
    throw new Error(error);
  }
}