import { Product, User } from "@prisma/client";

export type TUser = Omit<
    User,
    "createdAt" | "updatedAt"
> & {
    createdAt: string;
    updatedAt: string;
};

export type TProduct = Omit<
    Product, "createdAt" | "updatedAt"
> & {
    createdAt: string;
    updatedAt: string;
};

