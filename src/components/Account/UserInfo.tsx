import * as React from 'react';
import { connect } from 'react-redux';
import { RootState, MaybeAccount } from '../../types';
import { Layout,  AccountConnection } from '@shopify/polaris';

export interface Props {
  readonly accountInfo: MaybeAccount;
}

class UserInfo extends React.PureComponent<Props, never> {
  public render() {
    const { accountInfo } = this.props;

    return accountInfo ? (
      <Layout.Section secondary>
        <AccountConnection
          connected
          title={accountInfo.fullName}
          accountName={accountInfo.fullName}
        />
      </Layout.Section>
    ) : (
      <div />
    );
  }
}

const mapState = (state: RootState): Props => ({
  accountInfo: state.account
});

export default connect(mapState)(UserInfo);