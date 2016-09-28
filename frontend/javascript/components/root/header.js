/* @flow */

import React from 'react';
import { Link } from 'react-router';
import cn from 'classnames';

import PersonIcon from '../../../icons/person.svg';
import Icon from '../shared/icon';


const isActive = (path: string) => (
  !!location.pathname.match(new RegExp(`^${path}`, 'i'))
);

type PropsT = {
  isLoggedIn: boolean
};
export default (props: PropsT) => {
  return (
     <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
        <Link className="navbar-brand" to="/">Lets Play</Link>
        <ul className="nav navbar-nav">
          <li className={cn("nav-item", {"active": isActive('/$')})}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={cn("nav-item", {"active": isActive('/playground')})}>
            <Link className="nav-link" to="/playground">Playground</Link>
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
            {
              props.isLoggedIn ? (
                <Link className="nav-link user-nav" to="/logout">
                  <Icon iconName={PersonIcon} width={20} height={20} />
                  Sign out
                </Link>
              )
              :
              (
                <Link className="nav-link user-nav" to="/login">
                  <Icon iconName={PersonIcon} width={20} height={20} />
                  Sign in
                </Link>
              )
            }
          </li>
        </ul>

      </nav>
  );
};
