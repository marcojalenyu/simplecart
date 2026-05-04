import { Image } from "react-native";
import { ThemedView } from "../themed-view";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ThemedView
      className={`rounded-lg border border-gray-300 dark:border-gray-700 ${className || ""}`}
    >
      {children}
    </ThemedView>
  );
}

export function ImageCard({
  className,
  imageClassName,
  source,
  alt,
}: {
  className?: string;
  imageClassName?: string;
  source: { uri: string };
  alt: string;
}) {
  return (
    <Card className={`overflow-hidden border-none p-0 ${className || ""}`}>
      <Image
        source={source}
        alt={alt}
        className={`w-full h-48 object-cover ${imageClassName || ""}`}
      />
    </Card>
  );
}
