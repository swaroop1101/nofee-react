const ChannelCard = ({name, channel, image}) => {
  return (
    <div className="bg-indigo-400 rounded-xl text-white p-4 mb-4 flex items-center space-x-4">
      <img
        src={image}
        alt="Instructor"
        className="w-16 h-16 rounded-sm object-cover"
      />
      <div>
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-sm">{channel}</div>
        <div className="mt-2 underline cursor-pointer">My Notes</div>
      </div>
    </div>
  );
};

export default ChannelCard;
