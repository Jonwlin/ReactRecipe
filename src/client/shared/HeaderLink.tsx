import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HeaderLink = ({page, href}: {page: string, href?: string}) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  if (typeof href === 'undefined') {
    return <Nav.Link as={Link} to={`/${page}`}>{title}</Nav.Link>
  } else {
    return <Nav.Link href={`${href}`}>{title}</Nav.Link>
  }

};