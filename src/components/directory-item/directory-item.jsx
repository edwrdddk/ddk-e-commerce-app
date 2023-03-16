import './directory-item.scss'

export default function DirectoryItem({ category }) {  //destucturing props
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container" >
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}


