import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

export default function DirectoryItem({ category }) {  //destucturing props
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer >
      <BackgroundImage
        imageUrl={imageUrl}
        className="background-image"
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}


