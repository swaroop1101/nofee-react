const PlayListItem = ({ video, index, duration, onVideoSelect, isPlaying }) => {
  const title = video.snippet.title;
  const thumbnail = video.snippet.thumbnails.medium.url;

  return (
    <div
      onClick={() => onVideoSelect(video)}
      className={`cursor-pointer rounded-xl text-black p-2 flex items-center space-x-4 transition
        ${isPlaying ? 'bg-gray-300 text-black' : 'bg-gray-100 hover:bg-gray-200'}`}
    >
      <div className="w-[100px] h-[70px] flex-shrink-0 overflow-hidden rounded bg-black">
        <img src={thumbnail} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-between h-[70px] w-full">
        <div className="text-sm font-semibold leading-tight line-clamp-2">
          {index + 1}. {title}
        </div>
        <div className="text-xs text-black mt-1 flex items-center space-x-2">
          <span>Duration: {duration || "N/A"}</span>
          {isPlaying && (
            <span className="text-blue-900 font-semibold whitespace-nowrap">Now Playing</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayListItem;
