// pages/ProductDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card, Grid, Loader, Divider, Text } from "@mantine/core";
import { fetchProductDetail, fetchRelatedProducts } from "@/services/ApiProductService";
import { Product, RelatedProduct } from "@/@types/product";
import { ProductInfo } from "./ProductInfo";
import { AdditionalInfo } from "./AdditionalInfo";
import { RelatedProducts } from "./RelatedProducts";
import { Reviews } from "./Reviews";


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery<{ data: Product }>(["product", id], () =>
    fetchProductDetail(id as string)
  );

  const product: any = data?.data;

  const { data: relatedData }:any = useQuery<{ data: { products: RelatedProduct[] } }>(
    ["relatedProducts", product?.category],
    () => fetchRelatedProducts(product?.category),
    { enabled: !!product?.category }
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader size="lg" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Text color="red" size="xl">
          Failed to load product details. Please try again later.
        </Text>
      </div>
    );
  }

  return (
    <div className="p-4 lg:px-4 lg:py-12 shadow-lg">
      <Card shadow="xl" padding="lg" radius="xl" className="bg-white overflow-hidden border border-gray-200">
        <Grid>
          <Grid.Col span={12}>
            <ProductInfo product={product} />
          </Grid.Col>

          <Divider my="lg" className="border-gray-300" />

          <Grid.Col span={12}>
            <AdditionalInfo product={product} />
          </Grid.Col>

          <Divider my="lg" className="border-gray-300" />

          {relatedData?.data?.products?.length > 0 && (
            <Grid.Col span={12}>
              <RelatedProducts relatedProducts={relatedData.data.products} />
            </Grid.Col>
          )}

          <Divider my="lg" className="border-gray-300" />

          <Grid.Col span={12}>
            <Reviews reviews={product.reviews} />
          </Grid.Col>
        </Grid>
      </Card>
    </div>
  );
};

export default ProductDetail;
