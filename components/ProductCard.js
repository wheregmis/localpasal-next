import Image from "next/image";
import Link from "next/link";

function ProductCard(props) {
  return (
    <Link href={`/product/${props.id}`}>
      <div>
        <div
          className="h-fit w-fit rounded-ms p-2
            object-contain cursor-pointer hover:scale-105 transition transform duration-200 ease-in-out"
        >
          <Image
            src={props.productImage}
            height="330px"
            width="350px"
            objectFit="cover"
          />
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-center">Price: (NRP)</h1>
            <h1 className="text-lg text-center">{props.productPrice}</h1>
          </div>
          <h1 className="font-semibold text-xl w-[340px] truncate text-center">
            {props.productTitle}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
