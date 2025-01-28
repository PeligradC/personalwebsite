export interface GetProduct {
    _id: string;
    name: string;
    product: string;
    cloudinary_id: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateProduct {
    name: string;
    product: string;
    cloudinary_id: string;
}
