// components/AdditionalInfo.tsx
import React from "react";
import { Title, List } from "@mantine/core";
import { Product } from "@/@types/product";

interface AdditionalInfoProps {
  product: Product;
}

export const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ product }) => (
  <>
    <Title order={4} className="font-semibold text-gray-800">
      Additional Information
    </Title>
    <List withPadding size="sm" className="mt-4 bg-gray-50 p-4 rounded-xl shadow-sm">
      <List.Item className="text-gray-700">
        <strong>Brand:</strong> {product.brand}
      </List.Item>
      <List.Item className="text-gray-700">
        <strong>SKU:</strong> {product.sku}
      </List.Item>
      <List.Item className="text-gray-700">
        <strong>Warranty:</strong> {product.warrantyInformation}
      </List.Item>
      <List.Item className="text-gray-700">
        <strong>Shipping:</strong> {product.shippingInformation}
      </List.Item>
      <List.Item className="text-gray-700">
        <strong>Availability:</strong> {product.availabilityStatus}
      </List.Item>
    </List>
  </>
);
