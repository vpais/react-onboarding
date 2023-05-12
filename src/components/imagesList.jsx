import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function imagesList({data}) {
  return (
    <ImageList cols={6} gap={50}>
      {data.map((item, index) => (
        <div key={index}>
          <ImageListItem key={item.id}>
            <img
              src={import.meta.env.VITE_API_IMG_PREFIX + item.poster_path}
              srcSet={import.meta.env.VITE_API_IMG_PREFIX + item.poster_path}
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
