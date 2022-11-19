import { useNavigate } from 'react-router-dom';

import { ROUTE } from '../navigation/routes';

type CardProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
};

const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  description,
  price,
  thumbnail,
  discountPercentage,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="container w-72 h-80 mx-auto bg-white py-2.5 px-3  rounded-md border border-[#DBDBDB]"
      onClick={() => navigate(`${ROUTE.PRODUCT_DETAILS}/${id}`)}>
      {/* IMG CONTAINER*/}
      <div className="container relative overflow-hidden h-36 rounded-md">
        {/* DISCOUNT CHIP */}
        <span className="absolute right-2 top-2 text-white text-sm font-semibold bg-main-purple px-4 py-1 rounded-2xl">
          -{discountPercentage}%
        </span>
        <img
          className="block object-cover h-full w-full"
          src={thumbnail}
          alt={name}
        />
      </div>
      {/* PRICE AND TITLE */}
      <div className="container items-baseline flex justify-between mt-2">
        <h1 className="text-dark-text text-xl font-semibold">
          {name.length > 15 ? `${name.substring(0, 15)}...` : name}
        </h1>
        <h1 className="text-dark-text text-2xl font-semibold">{price}$</h1>
      </div>
      {/* DESCRIPTION */}
      <p className="mb-3.5">{description.substring(0, 50)}</p>
      {/* See Details Button */}
      <button className=" text-white bg-black text-base font-semibold py-3 w-full rounded-3xl">
        See details
      </button>
    </div>
  );
};

export default ProductCard;
