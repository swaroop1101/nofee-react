import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// ho gya
import PlayListSidebar from "./PlayListSidebar.jsx";
import PlayListPlayer from "../../Common Components/PlayListPlayer.jsx";

const IntelliPaatMernHome = () => {
  const apiKey = "AIzaSyBs569PnYQUNFUXon5AMersGFuKS8aS1QQ";
  const videoId = "d0GkjcBGVbc";

  const [videos, setVideos] = useState([]);
  const [durations, setDurations] = useState({});
  const [totalDuration, setTotalDuration] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    setLoading(true);
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      const video = data.items[0];

      if (!video) throw new Error("Video not found");

      const iso = video.contentDetails.duration;
      const duration = formatDuration(iso);
      const totalSeconds = durationToSeconds(iso);

      setDurations({ [video.id]: duration });
      setTotalDuration(secondsToHMS(totalSeconds));

      const formattedVideo = {
        snippet: {
          ...video.snippet,
          resourceId: { videoId: video.id },
        },
        id: video.id,
      };

      setVideos([formattedVideo]);
      setSelectedVideo(formattedVideo);
      setSelectedVideoId(video.id);

      const urlVideoId = searchParams.get("v");
      if (!urlVideoId) {
        setSearchParams({ v: video.id });
      }
    } catch (err) {
      console.error("Error loading video:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (iso) => {
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const h = parseInt(match?.[1] || 0);
    const m = parseInt(match?.[2] || 0);
    const s = parseInt(match?.[3] || 0);
    const hh = h > 0 ? `${h}:` : "";
    const mm = m < 10 && h > 0 ? `0${m}` : `${m}`;
    const ss = s < 10 ? `0${s}` : `${s}`;
    return `${hh}${mm}:${ss}`;
  };

  const durationToSeconds = (iso) => {
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const h = parseInt(match?.[1] || 0);
    const m = parseInt(match?.[2] || 0);
    const s = parseInt(match?.[3] || 0);
    return h * 3600 + m * 60 + s;
  };

  const secondsToHMS = (total) => {
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const handleVideoSelect = (video) => {
    setLoading(true);
    setTimeout(() => {
      const id = video.snippet.resourceId.videoId;
      setSelectedVideo(video);
      setSelectedVideoId(id);
      setSearchParams({ v: id });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        <PlayListPlayer video={selectedVideo} loading={loading} />
        <PlayListSidebar
          videos={videos}
          durations={durations}
          totalDuration={totalDuration}
          selectedVideoId={selectedVideoId}
          onVideoSelect={handleVideoSelect}
        />
      </div>
    </div>
  );
};

export default IntelliPaatMernHome;
