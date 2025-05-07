import React from "react";
import { SimpleGrid, Card, Image, Title, Text } from "@mantine/core";
import { RelatedProduct } from "@/@types/product";

interface RelatedProductsProps {
  relatedProducts: RelatedProduct[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ relatedProducts }) => (
  <>
    <Title order={4} className="font-semibold text-gray-800 mb-4">
      Related Products
    </Title>
    <SimpleGrid
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 1200, cols: 3, spacing: "md" },
        { maxWidth: 992, cols: 2, spacing: "sm" },
        { maxWidth: 768, cols: 2, spacing: "sm" },
        { maxWidth: 576, cols: 1, spacing: "sm" },
      ]}
    >
      {relatedProducts.map((product) => (
        <Card
          key={product.id}
          shadow="sm"
          padding="lg"
          radius="xl"
          className="bg-gray-50 border border-gray-200 transition-transform duration-200 hover:scale-105"
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={180}
            width="100%"
            className="object-contain mb-4"
          />
          <Title order={4} className="text-center text-gray-900 text-lg font-semibold">
            {product.title}
          </Title>
          <Text className="text-center text-gray-700 mt-2">${product.price.toFixed(2)}</Text>
        </Card>
      ))}
    </SimpleGrid>
  </>
);
