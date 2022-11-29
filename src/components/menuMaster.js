import React, { Component, useState, useContext, createContext, useEffect } from "react";
import { Menu, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormSummary from './FormSummary'
import RechercheSummary from './RechercheSummary'
import FindCustomerSummary from "./findCustomerSummary";
import NoteSummary from './noteSummary'
import ContactSummary from './contactSummary'
import BoxSummary from './BoxSummary'
import BoxYearSummary from './boxYearSummary'
import LogOutSummary from './logOutSummary'
import CustomerSummary from './CustomerSummary'

export default class MenuExampleBasic extends Component {
  state = {};

 
  
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
           <Link to="/vueContactList">
                  <ContactSummary/>
                </Link>
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          <Link to="/note">
                  <NoteSummary /> 
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/form">
                   <FormSummary />
                </Link>
        </Menu.Item>
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/Recherche">
                   <RechercheSummary />
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/findCustomer">
                   <FindCustomerSummary />
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/Customer">
                   <CustomerSummary />
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/Box">
                   <BoxSummary />
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/BoxYear">
                   <BoxYearSummary />
                </Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
         <Link to="/BoxYear">
                   <LogOutSummary />
                </Link>
        </Menu.Item>

      </Menu>
    )
  }
}
