const PlayListPlayer = ({ video, loading }) => {
  const videoId = video?.snippet?.resourceId?.videoId;
  const title = video?.snippet?.title;

  if (loading || !videoId) {
    return (
      <div className="w-full lg:w-2/3 bg-white p-2 rounded-xl shadow-md text-center">
        <div className="animate-pulse h-64 bg-gray-200 rounded-xl mb-4" />
        <p className="text-sm text-gray-500">Loading video...</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-2/3 bg-white p-4 rounded-xl shadow-md">
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h2 className="text-lg font-semibold line-clamp-2 w-full pr-2">
          {title}
        </h2>

        <button className="border border-black bg-white hover:bg-gray-300 text-black text-md px-3 py-1 rounded-md whitespace-nowrap">
          Watch Later
        </button>
      </div>
    </div>
  );
};

export default PlayListPlayer;
