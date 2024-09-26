

interface Props {

  imageUrl?: string
  projectName?: string

}

const ProjectsCard = ({imageUrl, projectName}:Props) => {
  return (
    <div className="project-card w-1/3 h-96 shadow-md">
      <h3>Project Title</h3>
    </div>
  );
};

export default ProjectsCard;
