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

class Settings extends Component {
  render() {
    return (
      <div>
      <ListView background="#f1f2f4">
        <ListViewHeader>
          <Text size="11" color="#696969">Add New Project</Text>
          <TextInput placeholder="Project URL" />
          <TextInput placeholder="Authorization" />
          <Button>Add</Button>
        </ListViewHeader>
        <ListViewSection header={this.renderSectionHeader('My Section')}>
          {this.renderItem('Item 1', 'This is the first item.')}
          {this.renderItem('Item 2', 'This is the second item.')}
          {this.renderItem('Item 3', 'This is the third item.')}
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

  renderItem(title, info) {
    return this.props.accounts.map((account) => {
      return (
        <ListViewRow>
          <Text color="#414141" size="13">{info}</Text>
        </ListViewRow>
      )
    })
  }
}

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addAccount: addAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)