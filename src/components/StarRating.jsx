function StarRating({ rating, max = 5 }) {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: max }, (_, i) => (
        <span key={i}>
          {i < rounded ? "★" : "☆"}
        </span>
      ))}

      <span className="text-gray-500 text-sm ml-1">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
}

export default StarRating;