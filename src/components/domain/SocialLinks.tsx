import Email from '../icons/Email';
import Github from '../icons/Github';
import Instagram from '../icons/Instagram';
import Linkedin from '../icons/Linkedin';
import X from '../icons/X';

import { SocialLinkTooltip } from './SocialLinkTooltip';

interface SocialNetwork {
  x: string | null;
  instagram: string | null;
  linkedin: string | null;
  github: string | null;
  email: string | null;
}

interface SocialLinksProps {
  socialLinks: SocialNetwork;
}

const SocialIcons = {
  x: <X />,
  instagram: <Instagram />,
  linkedin: <Linkedin />,
  github: <Github />,
  email: <Email />,
};

const SocialLinks = ({ socialLinks }: SocialLinksProps) => {
  return (
    <div className="item-center flex justify-center gap-[10px] p-4">
      {Object?.keys(socialLinks)?.map((key) => {
        if (key === 'id' || !socialLinks[key as keyof SocialNetwork])
          return null;

        return (
          <SocialLinkTooltip
            key={key}
            link={socialLinks[key as keyof SocialNetwork] || ''}
            tooltipText={key}
          >
            {SocialIcons[key as keyof SocialNetwork]}
          </SocialLinkTooltip>
        );
      })}
    </div>
  );
};

export default SocialLinks;
