import { Compact } from './compact'
import { Regular } from './regular'
import { MlCardBasketProps, MlCardBasketType } from './ml-card-basket.types'

export const MlCardBasket = ({
  sku,
  skuLabel = 'SKU:',
  showSku = false,
  content = MlCardBasketType.REGULAR,
  mobileCard = false,
  className,
  color,
  colorLabel = 'Color',
  description,
  eyebrowHeadline,
  image,
  productLink,
  informativeMessage,
  initialInputValue = 0,
  isDeleteButtonDisabled = false,
  isQuantityInputDisabled = false,
  onDeleteItem,
  onQuantityChange,
  originalPrice,
  price,
  showInputQuantity,
  size,
  sizeLabel = 'Size',
  stockAmount,
  title,
  showBottomBorder = true,
}: MlCardBasketProps) => {
  switch (content) {
    case MlCardBasketType.COMPACT:
      return (
        <Compact
          sku={sku}
          skuLabel={skuLabel}
          showSku={showSku}
          className={className}
          color={color}
          colorLabel={colorLabel}
          image={image}
          productLink={productLink}
          informativeMessage={informativeMessage}
          initialInputValue={initialInputValue}
          isDeleteButtonDisabled={isDeleteButtonDisabled}
          isQuantityInputDisabled={isQuantityInputDisabled}
          onDeleteItem={onDeleteItem}
          onQuantityChange={onQuantityChange}
          originalPrice={originalPrice}
          price={price}
          showInputQuantity={showInputQuantity}
          size={size}
          sizeLabel={sizeLabel}
          stockAmount={stockAmount}
          title={title}
          index={'compact'}
          showBottomBorder={showBottomBorder}
          mobileCard={mobileCard}
        />
      )
    default:
      return (
        <Regular
          className={className}
          colorLabel={colorLabel}
          color={color}
          description={description}
          eyebrowHeadline={eyebrowHeadline}
          image={image}
          productLink={productLink}
          informativeMessage={informativeMessage}
          initialInputValue={initialInputValue}
          isDeleteButtonDisabled={isDeleteButtonDisabled}
          isQuantityInputDisabled={isQuantityInputDisabled}
          onDeleteItem={onDeleteItem}
          onQuantityChange={onQuantityChange}
          originalPrice={originalPrice}
          price={price}
          showInputQuantity={showInputQuantity}
          size={size}
          sizeLabel={sizeLabel}
          stockAmount={stockAmount}
          title={title}
          index={'regular'}
          showBottomBorder={showBottomBorder}
        />
      )
  }
}
