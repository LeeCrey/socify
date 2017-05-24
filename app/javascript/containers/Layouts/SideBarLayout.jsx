import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';

const propTypes = {
  children: PropTypes.object.isRequired,
  linkItems: PropTypes.array
};

const defaultProps = {
  linkItems: [
    { label: 'NewsFeed', key: 1, icon: 'icon-newspaper', path: '/' },
    { label: 'Events', key: 2, icon: 'icon-calendar-empty', path: '/' },
    { label: 'Photo Albums', key: 3, icon: 'icon-picture', path: '/' },
    { label: 'Friends', key: 4, icon: 'icon-users', path: '/' },
    { label: 'Find Friends', key: 5, icon: 'icon-search', path: '/' }
  ]
};

const SideBarLayout = ({ children, linkItems }) => (
  <Row>
    <Col xs={3}>
      <LeftSideBar user={{}} />
    </Col>
    <Col xs={6}>
      {children}
    </Col>
    <Col xs={3}>
      <RightSideBar linkItems={linkItems} />
    </Col>
  </Row>
);

SideBarLayout.propTypes = propTypes;
SideBarLayout.defaultProps = defaultProps;

export default SideBarLayout;