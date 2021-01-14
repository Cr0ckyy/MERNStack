import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mark Schwartz",
      image:
        "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/5/29/1369827994288/Aaron-Swartz-internet-act-010.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=39bf4220cbb52d69de6a240c63a21193",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
