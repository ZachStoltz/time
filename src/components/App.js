import Accruals from './accruals/accruals';
import { connect } from 'react-redux';
import Home from './home/home';
import Profile from './profile/profile';
import TimeSheet from './time-sheet/time-sheet';
import { toggleTab } from '../redux/actions/tabBarActions';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TabBarIOS,
} from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 70,
    marginLeft: 15,
    marginRight: 15,
  },
  txt: {
    fontSize: 40,
  },
});

class App extends Component {
  constructor() {
    super();
    // TODO: using the new bind operator errors out React-Native... WHY?
    this.toggleTabItem = this.toggleTabItem.bind(this);
  }

  toggleTabItem(selected) {
    const { dispatch } = this.props;
    dispatch(toggleTab(selected));
  }

  render() {
    const { tabBar } = this.props;
    return (
      // TODO: Create Custom TabBar Icons
      // TODO: Replace systemIcon types with custom icons from above
      // TODO: Refactor code to dynamically create the components?
      // TODO: Animate the tabbar toggle/ indicate loading?
      // TODO: Hide Tabbars when a route is taken / Show NavigatorIOS?
      <TabBarIOS
        barTintColor="#E91E63"
      >
        <TabBarIOS.Item
          systemIcon="favorites"
          onPress={() => this.toggleTabItem('home')}
          selected={tabBar.selected ? tabBar.selected === 'home' : false}
        >
          <Home title={tabBar.selected} style={styles} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          onPress={() => this.toggleTabItem('sheet')}
          selected={tabBar.selected ? tabBar.selected === 'sheet' : false}
        >
          <TimeSheet title={tabBar.selected} style={styles} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="contacts"
          onPress={() => this.toggleTabItem('profile')}
          selected={tabBar.selected ? tabBar.selected === 'profile' : false}
        >
          <Profile title={tabBar.selected} style={styles} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          onPress={() => this.toggleTabItem('accrual')}
          selected={tabBar.selected ? tabBar.selected === 'accrual' : false}
        >
          <Accruals title={tabBar.selected} style={styles} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tabBar: PropTypes.object,
};

export default connect((store) => ({
  tabBar: store.tabBar,
}))(App);
