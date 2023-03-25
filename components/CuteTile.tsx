type CuteTileProps = {
  pictogram: JSX.Element;
  label: JSX.Element | string;
};

export default function CuteTile({ pictogram, label }: CuteTileProps) {
  return (
    <div className="inline-block text-center">
      <div className="inline-block">{pictogram}</div>
      <h2 className="uppercase text-xl md:text-2xl font-medium">{label}</h2>
    </div>
  );
}
