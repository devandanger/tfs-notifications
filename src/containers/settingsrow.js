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

class SettingsRow extends Component {

    render() {
        return this.props.accounts.map((account) => {
            console.log("Show repos " + account.project_url)
            return (
                <ListViewRow key="{account.project_url}">
                <Text color="#414141" size="13">{account.project_url}</Text>
                </ListViewRow>
            )
        })
    }
}

//export default connect(mapStateToProps, mapDispatchToProps)(Settings)

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SettingsRow)