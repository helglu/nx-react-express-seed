import {UserEntity} from "../entities/user-entity";
import React from "react";

export function HelloUser(user: UserEntity) {
  return( <p>Hello {user.userName}</p> );
}
