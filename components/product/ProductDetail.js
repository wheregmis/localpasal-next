function ProductDetail(props) {
  return (
    <div className="flex justify-start place-items-center item space-x-5 text-xl">
      <div className="w-2/6">
        <h1 className="font-semibold">{props.title}</h1>
      </div>
      <h1>:</h1>
      <h1>{props.value}</h1>
    </div>
  );
}

export default ProductDetail;
