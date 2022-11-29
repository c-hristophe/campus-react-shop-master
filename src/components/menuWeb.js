import React, { Component } from 'react'
import { Menu, Icon} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from '../App'
import CartSummary from "./CartSummary"
import LoginSummary from './LoginSummary'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
         <Link to="/">Accueil</Link>
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          <Link to="/cart">
                  <Icon name="cart" size="small" /> 
                  <CartSummary />
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          <Link to="/login">
                   <LoginSummary />
                </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
