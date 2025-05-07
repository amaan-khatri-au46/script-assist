// components/Reviews.tsx
import React from "react";
import { Card, Group, Text, Title } from "@mantine/core";
import { Review } from "@/@types/product";

interface ReviewsProps {
  reviews: Review[];
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => (
  <>
    <Title order={4} className="font-semibold text-gray-800">
      Customer Reviews
    </Title>
    {reviews.length > 0 ? (
      <div className="mt-6 grid gap-8">
        {reviews.map((review, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="md"
            radius="lg"
            className="bg-gray-50 border border-gray-200"
          >
            <Group position="apart">
              <Text size="sm" weight={700} className="text-gray-800">
                {review.reviewerName}
              </Text>
              <Text size="xs" color="dimmed">
                {new Date(review.date).toLocaleDateString()}
              </Text>
            </Group>
            <Text size="sm" mt="xs" className="text-gray-700">
              {review.comment}
            </Text>
            <div className="flex items-center mt-2 space-x-1">
              <Text size="sm" className="text-yellow-500">
                ★
              </Text>
              <Text size="sm">{review.rating} / 5</Text>
            </div>
          </Card>
        ))}
      </div>
    ) : (
      <Text size="sm" color="dimmed">
        No reviews available for this product.
      </Text>
    )}
  </>
);
