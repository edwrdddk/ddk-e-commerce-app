import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';
import { DirectoryCategory } from '../directory/directory';

type DirectoryItemProps = {
  category: DirectoryCategory;
} 

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {  //destucturing props
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
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

export default DirectoryItem;




