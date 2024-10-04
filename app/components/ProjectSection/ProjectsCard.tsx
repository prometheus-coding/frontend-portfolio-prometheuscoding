
/* eslint-disable @next/next/no-img-element */
interface Props {
  imageUrl?: string;
}

const ProjectsCard = ({ imageUrl }: Props) => {
  return (
    <div className="relative project-card shadow-md ~size-56/80">
      <div className="h-full overflow-hidden rounded-md bg-cover bg-center border-[1px] border-gray-700" style={{backgroundImage:`url(${imageUrl})`}}>
      <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-black opacity-50 hover:opacity-0 transition-opacity duration-200 ease-in-out"></div>
        {/* <img src={imageUrl} alt="image" className="" /> */}
      </div>
    </div>
  );
};

export default ProjectsCard;
