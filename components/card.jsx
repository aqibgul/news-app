const Card = ({ id, name, description, imageUrl, url, publishDate, title }) => {
  return (
    <div className="">
      <div className="  overflow-hidden mb-4">
        <div className="p-4 bg-gray-100 text-gray-700">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
        </div>
        <div className="relative">
          <img
            src={imageUrl || "https://via.placeholder.com/150"}
            alt={`No Image found ${name}`}
            className="w-full h-70 md:h-100 object-fill"
          />
          <div className="absolute border-1 rounded-3xl bottom-[5px] right-[2px] opacity-70 bg-white  ">
            <p className="text-sm  p-1  ">
              Published on: {new Date(publishDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>

          <p className="text-gray-800 mb-4">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
