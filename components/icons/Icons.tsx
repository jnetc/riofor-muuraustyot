import { FC } from 'react';
// Icons
import { Email } from './Email';
import { PaperPlain } from './PaperPlain';
import { Phone } from './Phone';
import { Projects } from './Projects';

/**
 * Should "icon" email, paperplain, phone, projects
 */
type IconsProps = 'email' | 'paperplain' | 'phone' | 'projects';

export const Icons: FC<{ icon: IconsProps }> = ({ icon }) => {
  const wideIcons = ['cloud', 'email'];
  const icons = {
    email: <Email />,
    paperplain: <PaperPlain />,
    phone: <Phone />,
    projects: <Projects />,
  };
  return (
    <div className={`btn-icon normal ${wideIcons.includes(icon) && 'wide'}}`}>
      {icons[icon]}
    </div>
  );
};
