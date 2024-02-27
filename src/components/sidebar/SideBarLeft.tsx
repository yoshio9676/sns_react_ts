import React, { useState } from "react";
import AccountType, { accounts } from "../../types/sidebar/Account";
import { JSX } from "@emotion/react/jsx-runtime";
import * as Icons from "@mui/icons-material";

const SideBarLeft = () => {
  // setContextで管理した方がよい？
  const [currentAccount, setCurrentAccount] = useState<AccountType["id"]>(
    accounts[0].id,
  );

  const handleCurrentAccount = (accountId: AccountType["id"]): void => {
    setCurrentAccount(accountId);
  };

  const accountList: JSX.Element[] = accounts.map((account: AccountType) => {
    const currentAccountClass =
      currentAccount === account.id ? "active server-icon" : "server-icon";
    return (
      <div
        className={currentAccountClass}
        style={{ color: account.color }}
        onClick={() => handleCurrentAccount(account.id)}
        key={account.id}
      >
        {React.createElement(Icons[account.icon])}
      </div>
    );
  });

  return <div className="sidebar-left">{accountList}</div>;
};

export default SideBarLeft;
