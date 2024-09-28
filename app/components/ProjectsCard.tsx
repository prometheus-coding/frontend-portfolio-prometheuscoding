interface Props {
  imageUrl?: string;
  projectName?: string;
}

const ProjectsCard = ({ imageUrl, projectName }: Props) => {
  return (
    <div className="project-card w-96 h-80 shadow-md rounded">
      <h3>Project Title</h3>
    </div>
  );
};

export default ProjectsCard;
