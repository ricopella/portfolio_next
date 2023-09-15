import Star from '@/components/star';
import STYLES from './styles';

const SKILLS = [
  {
    name: 'React',
    level: 5,
  },
  {
    name: 'TypeScript',
    level: 5,
  },
  {
    name: 'CSS',
    level: 5,
  },
  {
    name: 'Node',
    level: 4,
  },
  {
    name: 'GraphQL',
    level: 4,
  },
  {
    name: 'SQL',
    level: 4,
  },
  {
    name: 'Express',
    level: 4,
  },
];

export default function Skills() {
  return (
    <div className={STYLES.infoColumnContainer.className}>
      <h4 className={STYLES.infoColumnHeading.className}>SKILLS</h4>
      <div className={STYLES.skillsContainer.className}>
        {SKILLS.map((skill) => (
          <div key={skill.name} {...STYLES.skillRow}>
            <div {...STYLES.skillValue}>
              {[...new Array(skill.level)].map((_, y) => (
                <Star key={`skill_star_${skill.name}_${y}}`} />
              ))}
            </div>
            <div className={STYLES.skillName.className}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
