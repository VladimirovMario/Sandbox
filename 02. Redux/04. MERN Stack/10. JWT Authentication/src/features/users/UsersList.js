import User from './User';
import { useGetUsersQuery } from './usersApiSlice';

const UsersList = () => {
  const { usersIds, isLoading, isSuccess, isError, error } = useGetUsersQuery(
    undefined,
    {
      selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => {
        const initialUserIds = [];
        return {
          usersIds: data?.ids ?? initialUserIds,
          isLoading,
          isSuccess,
          isError,
          error,
        };
      },
      // pollingInterval: 60000,
      // refetchOnFocus: true,
      // refetchOnMountOrArgChange: true,
    }
  );
  // https://redux-toolkit.js.org/rtk-query/usage/queries#query-hook-options
  // https://redux-toolkit.js.org/rtk-query/usage/queries#selecting-data-from-a-query-result
  // https://redux-toolkit.js.org/rtk-query/usage/cache-behavior#re-fetching-on-window-focus-with-refetchonfocus
  // https://redux-toolkit.js.org/rtk-query/usage/cache-behavior#encouraging-re-fetching-with-refetchonmountorargchange

  let content = <></>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const tableContent = usersIds.map((userId) => (
      <User key={userId} userId={userId} />
    ));

    content = (
      <table className="table table--users">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th user__username">
              Username
            </th>
            <th scope="col" className="table__th user__roles">
              Roles
            </th>
            <th scope="col" className="table__th user__edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};

export default UsersList;
