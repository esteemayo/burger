import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type FooterLinks = {
  id: number;
  url: string;
  label: string;
}[];

export type Socials = {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}[];
