/* @flow */

import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

import PersonIcon from '../../../icons/person.svg';
import Icon from '../shared/icon';

type PropsT = {
  isLoggedIn: boolean,
  //onSignIn:
};

const isActive = (path: string) => (
  !!location.pathname.match(new RegExp(`^${path}`, 'i'))
);

export default (props: PropsT) => {
  return (
     <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
        <a className="navbar-brand" href="#">Project name</a>
        <ul className="nav navbar-nav">
          <li className={cn("nav-item", {"active": isActive('/$')})}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={cn("nav-item", {"active": isActive('/about')})}>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className={cn("nav-item", {"active": isActive('/contact')})}>
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link user-nav" href="/login">
              <Icon iconName={PersonIcon} width={20} height={20} />
              Sign in
            </a>
          </li>
        </ul>

      </nav>
  );
};
