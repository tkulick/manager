import arch from 'file-loader!../assets/distros/Arch.png';
import centos from 'file-loader!../assets/distros/CentOS.png';
import debian from 'file-loader!../assets/distros/Debian.png';
import fedora from 'file-loader!../assets/distros/Fedora.png';
import gentoo from 'file-loader!../assets/distros/Gentoo.png';
import slackware from 'file-loader!../assets/distros/Slackware.png';
import ubuntu from 'file-loader!../assets/distros/Ubuntu.png';
import opensuse from 'file-loader!../assets/distros/OpenSUSE.png';

export const distros = {
  arch, centos, debian, fedora, gentoo, slackware, ubuntu, opensuse,
};

import us from 'flag-icon-css/flags/4x3/us.svg';
import de from 'flag-icon-css/flags/4x3/de.svg';
import gb from 'flag-icon-css/flags/4x3/gb.svg';
import sg from 'flag-icon-css/flags/4x3/sg.svg';
import jp from 'flag-icon-css/flags/4x3/jp.svg';

export const flags = {
  us, de, gb, sg, jp,
  uk: gb,
};

import logo from 'file-loader!../assets/logo/logo.svg';

export const LinodeLogoImgSrc = logo;
