const BookImage = (props: { imageUrl: string }) => {
  const { imageUrl } = props;
  return <div>{<img src={imageUrl} alt="" />}</div>;
};

export default BookImage;
