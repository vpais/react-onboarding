import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ImagesList({ data }) {
  
  function getSrcValue(item){
    return import.meta.env.VITE_API_IMG_PREFIX + item.poster_path
  }

  return (
    <ImageList cols={6} gap={50}>
      {data.map((item, index) => (
        <div key={item.id}>
          <ImageListItem>
            <img
              src={getSrcValue(item)}
              srcSet={getSrcValue(item)}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={`${index+1}. ${item.name}`}
              subtitle={item.overview}
            />
          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
}
