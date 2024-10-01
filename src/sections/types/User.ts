
// import {Organization} from "./Organization";
// import {Profile} from "./Profile";

import type { UserRole } from "src/constants/UserRole";

export interface User {
  _id?: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  type: UserRole;
  // profile?: Profile;
  // employeeId: string;
  // companyId: Organization;
  // designation: string;
  // createdAt: Date;
  // updatedAt: Date;
  gender: 'Male' | 'Female' | 'Other';
  // data?: Record<string, string>;
  organization: string;
}
