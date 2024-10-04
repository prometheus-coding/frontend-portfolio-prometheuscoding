
/* eslint-disable @next/next/no-img-element */
interface Props {
  imageUrl?: string;
}

const ProjectsCard = ({ imageUrl }: Props) => {
  return (
    <div className="project-card shadow-md ~size-56/80">
      <div className="h-full overflow-hidden rounded-md bg-cover bg-center" style={{backgroundImage:`url(${imageUrl})`}}>
        {/* <img src={imageUrl} alt="image" className="" /> */}
      </div>
    </div>
  );
};

export default ProjectsCard;
