import ChannelCard from "../../Common Components/ChannelCard.jsx";
import PlayListItem from "../../Common Components/PlayListItem.jsx";

const PlayListSidebar = ({ videos, durations, totalDuration, onVideoSelect, selectedVideoId }) => {
  const isDurationLoading = !totalDuration;

  return (
    <div className="w-full lg:w-1/3 bg-white p-2 rounded-xl shadow-md">
      <ChannelCard name="Jenny" channel="Jenny's Lecture" image="/jenny.jpeg"/>
      
      <div className="text-sm font-semibold mb-1">1. Lesson Playlist</div>

      {/* Show Loading... if duration is not ready */}
      <div className="text-xs text-gray-500 mb-2">
        Total Duration: {isDurationLoading ? "Loading..." : totalDuration}
      </div>

      <div className="max-h-[400px] overflow-y-auto pr-1 space-y-4">
        {videos.map((video, index) => {
          const videoId = video.snippet.resourceId.videoId;
          return (
            <PlayListItem
              key={video.id}
              index={index}
              video={video}
              duration={durations[videoId]}
              onVideoSelect={onVideoSelect}
              isPlaying={selectedVideoId === videoId} // Pass to highlight current video
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlayListSidebar;
