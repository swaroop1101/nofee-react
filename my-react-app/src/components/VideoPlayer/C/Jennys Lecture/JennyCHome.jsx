import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import PlayListSidebar from "./PlayListSidebar.jsx";
import PlayListPlayer from "../../Common Components/PlayListPlayer";


const JennyCHome = () => {
  const apiKey = "AIzaSyBs569PnYQUNFUXon5AMersGFuKS8aS1QQ";
  const playlistId = "PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S";
  const maxResults = 50;

  const [videos, setVideos] = useState([]);
  const [durations, setDurations] = useState({});
  const [totalDuration, setTotalDuration] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true); //
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const fetchPlaylist = async () => {
    setLoading(true); // Show loading
    try {
      let nextPageToken = "";
      let allVideos = [];

      do {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}&pageToken=${nextPageToken}`;
        const res = await fetch(url);
        const data = await res.json();
        allVideos.push(...data.items);
        nextPageToken = data.nextPageToken || "";
      } while (nextPageToken);

      const videoIds = allVideos.map((item) => item.snippet.resourceId.videoId);
      const chunks = chunkArray(videoIds, 50);

      let durationsMap = {};
      let totalSeconds = 0;

      for (let chunk of chunks) {
        const ids = chunk.join(",");
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${apiKey}`;
        const res = await fetch(detailsUrl);
        const data = await res.json();
        data.items.forEach((item) => {
          const iso = item.contentDetails.duration;
          durationsMap[item.id] = formatDuration(iso);
          totalSeconds += durationToSeconds(iso);
        });
      }

      const urlVideoId = searchParams.get("v");

      const defaultVideo =
        allVideos.find((v) => v.snippet.resourceId.videoId === urlVideoId) ||
        allVideos[0];

      // ⬇️ Add this logic: If no ?v= is in the URL, update it with the default video
      if (!urlVideoId && defaultVideo) {
        setSearchParams({ v: defaultVideo.snippet.resourceId.videoId });
      }

      setDurations(durationsMap);
      setTotalDuration(secondsToHMS(totalSeconds));
      setVideos(allVideos);
      setSelectedVideo(defaultVideo);
      setSelectedVideoId(defaultVideo.snippet.resourceId.videoId);
    } catch (error) {
      console.error("Error loading playlist:", error);
    } finally {
      setLoading(false); // Done loading
    }
  };

  useEffect(() => {
  const urlVideoId = searchParams.get("v");
  if (!urlVideoId || videos.length === 0) return;

  // Only update if the video ID from the URL is different from the selected one
  if (urlVideoId !== selectedVideoId) {
    const matchedVideo = videos.find(
      (v) => v.snippet.resourceId.videoId === urlVideoId
    );
    if (matchedVideo) {
      setSelectedVideo(matchedVideo);
      setSelectedVideoId(urlVideoId);
    }
  }
}, [searchParams, videos]);


  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
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
      setSearchParams({ v: id }); // Update URL with selected video ID
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

export default JennyCHome;
