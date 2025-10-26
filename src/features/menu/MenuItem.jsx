function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        {!soldOut ? (
          <p className="text-sm">{unitPrice}</p>
        ) : (
          <p className="text-sm font-medium text-stone-500 uppercase">
            Sold out
          </p>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
