export const navItems = [
  {
    type: 'link',
    href: '#home',
    label: 'Home',
  },
  {
    type: 'link',
    label: 'Service',
    href: '#features',
  },
  {
    type: 'link',
    label: 'testimonials',
    href: '#testimonials',
  },
  {
    type: 'link',
    label: 'Contact',
    href: '/contact',
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'dropdown';
      }
  );
