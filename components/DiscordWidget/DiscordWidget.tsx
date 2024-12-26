const DiscordWidget = ({ serverId }: any) => {
  const src = `https://discord.com/widget?id=${serverId}&theme=dark`;

  return (
    <iframe
      src={src}
      width="350"
      height="500"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      style={{ border: "none" }}
    ></iframe>
  );
};

export default DiscordWidget;
