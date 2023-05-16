import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ImagesList({ data }) {
  const imgPath = import.meta.env.VITE_API_IMG_PREFIX;
  const defaultImgPath = import.meta.env.VITE_API_DEFAULT_IMG_PATH

  return (
    <ImageList cols={6} gap={50}>
      {data.map((item, index) => (
        <div key={item.id}>
          <ImageListItem>
            <img
              src={item.poster_path?imgPath + item.poster_path:defaultImgPath}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={`${index + 1}. ${item.name}`}
              subtitle={item.overview}
            />
          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
}
