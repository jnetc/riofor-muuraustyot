import { FC } from 'react';
// Icons
import { ArrowDown } from './ArrowDown';
import { ArrowUp } from './ArrowUp';
import { Cloud } from './Cloud';
import { Email } from './Email';
import { Location } from './Location';
import { PaperPlain } from './PaperPlain';
import { Phone } from './Phone';
import { Projects } from './Projects';

/**
 * Should "icon" propherty cloud, email, location,  paperplain, phone, projects
 */
type IconsProps =
  | 'down'
  | 'up'
  | 'cloud'
  | 'email'
  | 'location'
  | 'paperplain'
  | 'phone'
  | 'projects';

export const Icons: FC<{ icon: IconsProps }> = ({ icon }) => {
  const wideIcons = ['cloud', 'email'];
  const narrowIcons = ['up', 'down'];
  const icons = {
    down: <ArrowDown />,
    up: <ArrowUp />,
    cloud: <Cloud />,
    email: <Email />,
    location: <Location />,
    paperplain: <PaperPlain />,
    phone: <Phone />,
    projects: <Projects />,
  };
  return (
    <div
      className={`button-icon normal ${wideIcons.includes(icon) && 'wide'} ${
        narrowIcons.includes(icon) && 'narrow'
      }`}
    >
      {icons[icon]}
    </div>
  );
};
