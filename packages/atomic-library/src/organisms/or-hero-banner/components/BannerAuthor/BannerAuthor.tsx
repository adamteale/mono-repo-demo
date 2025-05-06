import { AtImage } from "../../../../atoms";
import { OrHeroBannerProps } from "../../or-hero-banner.types";
import { authorInfoContainerClasses } from "../../or-hero-banner.variants";

export const BannerAuthor = ({ author }: Pick<OrHeroBannerProps, "author">) =>
  author &&
  (author.authorName || author.authorPicture || author.publicationDate) && (
    <View className="w-full absolute bottom-0 right-0 px-8 py-6 flex justify-end">
      <View className="flex gap-4 items-start">
        {author?.authorPicture && (
          <AtImage
            alt={`Image of ${author.authorName}`}
            className="rounded-full"
            {...author.authorPicture}
          />
        )}
        <View
          className={authorInfoContainerClasses({
            textColor: author.authorTextColor,
          })}
        >
          <Text>{author.authorName}</Text>
          <time>{author.publicationDate}</time>
        </View>
      </View>
    </View>
  );
