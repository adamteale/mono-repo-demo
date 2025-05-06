import { AtImage } from "../../atoms";
import { MlQuoteProps } from "./ml-quote.types";
import { authorNameClasses, authorRoleClasses } from "./ml-quote.variants";

export const MlQuote = ({ heading, quoteText, author }: MlQuoteProps) => {
  return (
    <View
      aria-labelledby="quoteHeading"
      className="flex flex-col items-center gap-20 py-24 container"
    >
      <Text
        id="quoteHeading"
        className="text-center font-bold text-primary text-lgx leading-6 tracking-0.1 md:text-2xl md:leading-10"
      >
        {heading}
      </Text>
      <blockquote className="flex flex-col items-center gap-12">
        <Text className="text-center font-medium text-primary text-xl leading-7 md:text-2xl  md:leading-10 xl:text-3xl xl:font-normal xl:leading-[3.75rem]">
          {quoteText}
        </Text>
        <footer className="flex flex-row gap-4 items-center">
          {author.image && (
            <AtImage className="h-14 w-14 rounded-full" {...author.image} />
          )}
          <View
            className={`flex flex-col gap-3 ${author.image ?? "items-center"}`}
          >
            <Text className={authorNameClasses({ hasImage: !!author.image })}>
              {author.name}
            </Text>
            <Text className={authorRoleClasses({ hasImage: !!author.image })}>
              {author.role}
            </Text>
          </View>
        </footer>
      </blockquote>
    </View>
  );
};
