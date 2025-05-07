// components/ProductInfo.tsx
import React from "react";
import { SimpleGrid, Title, Text, Badge, Image } from "@mantine/core";
import { Product } from "@/@types/product";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => (
  <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]} className="gap-8">
    <div className="flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl overflow-hidden shadow-lg">
      <Image
        src={product.thumbnail}
        alt={product.title}
        height={400}
        width="auto"
        className="object-contain p-4 transition-all duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
    <div className="space-y-6">
      <Title order={2} className="font-bold text-gray-900 tracking-tight">
        {product.title}
      </Title>
      <Text size="md" className="text-gray-700">
        {product.description}
      </Text>
      <Badge color="teal" size="lg" variant="filled" className="text-white text-sm px-4 py-2">
        Category: {product.category}
      </Badge>
      <div className="flex items-center space-x-4">
        <Text size="3xl" weight={800} className="text-indigo-600 font-semibold">
          ${product.price.toFixed(2)}
        </Text>
        <Badge color="yellow" size="lg" className="bg-yellow-200 text-yellow-800 font-semibold">
          {product.discountPercentage}% Off
        </Badge>
      </div>
      <div className="flex items-center space-x-2">
        <Text className="text-gray-600">Rating:</Text>
        <Text className="text-yellow-500 font-semibold">
          {product.rating}
          <span className="text-gray-500">/5</span>
        </Text>
      </div>
      <Text size="sm" className="text-gray-600">
        <strong>Stock:</strong> {product.stock} units available
      </Text>
    </div>
  </SimpleGrid>
);
