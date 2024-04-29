import ProjectCard from '@/components/project-card';
import SectionTitle from '@/components/section-title';
import { projects } from '@/db/project';
import { cn } from '@/lib/utils';

const Projects = ({ all = false }: { all?: boolean }) => {
  const allProjects = all
    ? projects.sort((a, b) => b.year - a.year)
    : projects.sort((a, b) => b.year - a.year).filter((p, index) => index < 4);
  return (
    <div className='pb-5'>
      {!all && <SectionTitle title={'Projects'} href={'/project'} viewAll />}
      <ul
        className={cn(
          !all ? 'grid gap-7 lg:grid-cols-2' : 'group/list space-y-7 '
        )}
      >
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} all={all} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
