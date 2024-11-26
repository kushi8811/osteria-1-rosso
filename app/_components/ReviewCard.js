const ReviewCard = ({ review }) => {
  if (!review) {
    return <p>Loading...</p>;
  }
  const truncatedText =
    review.text.length > 200
      ? `${review.text.substring(0, 200)}...`
      : review.text;

  return (
    <div className="bg-primary-400 p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105">
      <img
        src={review.profile_photo_url}
        alt={review.author_name}
        className="w-20 h-20 rounded-full mb-4 border-2 border-accent-700"
      />
      <h3 className="text-lg font-semibold text-gray-800">
        {review.author_name}
      </h3>
      <p className="text-sm text-gray-600 mb-2">Rating: {review.rating} ⭐</p>
      <p className="text-sm text-gray-700 text-center italic">
        {truncatedText}
      </p>
    </div>
  );
};

export default ReviewCard;
