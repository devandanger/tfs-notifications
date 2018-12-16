import React, { Component } from 'react';
import {
  Button,
  ListView,
  ListViewHeader,
  ListViewFooter,
  ListViewSection,
  ListViewSectionHeader,
  ListViewRow,
  ListViewSeparator,
  Text,
  TextInput
} from 'react-desktop/macOs';
import '../styles/App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addAccount } from '../redux/actions'
import { ADD_ACCOUNT } from '../redux/actionTypes';

class Settings extends Component {
  addAccountProjectURL = e => this.accountProjectUrl = e.target.value;
  addAccountAuthorization = e => this.accountAuthorization = e.target.value;
  accountProjectUrl = ""
  accountAuthorization = ""

  render() {
    return (
      <div>
      <ListView background="#f1f2f4">
        <ListViewHeader>
          <Text size="11" color="#696969">Add New Project</Text>
          <TextInput onChange={this.addAccountProjectURL} placeholder="Project URL" />
          <TextInput onChange={this.addAccountAuthorization} placeholder="Authorization" />
          <Button onClick={ () => this.props.createAccount(this.accountProjectUrl, this.accountAuthorization)}>Add</Button>
        </ListViewHeader>
        <ListViewSection header={this.renderSectionHeader('Repos')}>
          {this.renderItems()}
        </ListViewSection>
        <ListViewFooter>
          <Text size="11" color="#696969">Status</Text>
        </ListViewFooter>
      </ListView>
      </div>
    );
  }

  renderSectionHeader(title) {
    return (
      <ListViewSectionHeader>
        {title}
      </ListViewSectionHeader>
    );
  }

  renderItems() {
    return this.props.accounts.map((account) => {
      return (
        <ListViewRow>
          <Text color="#414141" size="13">{account.project_url}</Text>
        </ListViewRow>
      )
    })
  }
}

function mapStateToProps(state) {
  return {
    //TODO: Fix weird accounts.accounts reference
    accounts: state.accounts.accounts
  }
}

function mapDispatchToProps(dispatch) {
  return ({ createAccount: (project, auth) => {
    dispatch(addAccount({ project_url: project, authorization: auth }))
  }})
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)