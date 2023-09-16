export const ArticleCard = ({ title, src }: { title: String; src: string }) => {
  return (
    <div className="border rounded-xl p-3">
      <img
        className="w-full aspect-square object-cover border rounded-xl"
        src={src}
      />
      <span className="text-sm">{title}</span>
    </div>
  );
};
