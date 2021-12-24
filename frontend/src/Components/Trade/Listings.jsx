const Listings = ({
  desc,
  price,
  condition,
  negotiable,
  type,
  title,
  views,
  wishlists,
}) => {
  return (
    <div className='p-2 m-5'>
      <div className='p-2 m-5'>{desc}</div>
      <div className='p-2 m-5'>{price}</div>
      <div className='p-2 m-5'>{condition}</div>
      <div className='p-2 m-5'>{negotiable}</div>
      <div className='p-2 m-5'>{type}</div>
      <div className='p-2 m-5'>{title}</div>
      <div className='p-2 m-5'>{views}</div>
      <div className='p-2 m-5'>{wishlists}</div>
    </div>
  );
};

export default Listings;
