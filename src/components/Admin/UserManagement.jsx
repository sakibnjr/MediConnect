import React from "react";

const UserCard = ({ user }) => (
  <div className="flex items-center gap-4">
    <div>{user.name}</div>
    <div>{user.role}</div>
  </div>
);

const UserManagement = ({ users, onDeleteUser }) => (
  <div className="space-y-4">
    {users.map((user) => (
      <div
        key={user.id}
        className="flex justify-between items-center border-b pb-2"
      >
        <UserCard user={user} />
        <button
          className="btn btn-sm btn-error"
          onClick={() => onDeleteUser(user.id)}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

export default UserManagement;
