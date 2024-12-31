import LoadAwareImage from "@islands/LoadAwareImage.tsx";

export interface ShowImage {
  src: string;
  title: string;
  height: number;
  width: number;
  className?: string;
}

export interface ImageListProps {
  images: ShowImage[];
  imageClassName?: string;
}

export function ShowImage({ src, title, height, width, className }: ShowImage) {
  return (
    <LoadAwareImage
      src={src}
      alt={title}
      height={height}
      width={width}
      className={className}
      layout="fill"
      objectFit="cover"
    />
  );
}

export default function ImageList(
  { images, imageClassName = "my-3" }: ImageListProps,
) {
  const makeClassName = (className?: string) => {
    const baseClassName = imageClassName ? imageClassName : "";
    if (className) {
      return baseClassName + " " + className;
    }
    return baseClassName;
  };

  return (
    <div class="flex flex-row flex-wrap">
      {images.map((image) => (
        <ShowImage
          {...image}
          key={image.src}
          className={makeClassName(image.className)}
        />
      ))}
    </div>
  );
}
