import { useEffect, useState } from 'react';
import Note from './Note';
import { useGetNotesQuery } from './notesApiSlice';

const NotesList = () => {
  // State to track token validity
  const [isTokenValid, setIsTokenValid] = useState(true);

  // Fetch notes data using RTK Query
  const {
    data: notes = {},
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery(undefined, {
    // Polling interval based on token validity
    pollingInterval: isTokenValid ? 15000 : 0,
    refetchOnFocus: isTokenValid,
    refetchOnMountOrArgChange: isTokenValid,
  });
  // https://redux-toolkit.js.org/rtk-query/usage/queries#query-hook-options
  // https://redux-toolkit.js.org/rtk-query/usage/queries#selecting-data-from-a-query-result
  // https://redux-toolkit.js.org/rtk-query/usage/cache-behavior#re-fetching-on-window-focus-with-refetchonfocus
  // https://redux-toolkit.js.org/rtk-query/usage/cache-behavior#encouraging-re-fetching-with-refetchonmountorargchange

  // Update token validity based on query success
  useEffect(() => {
    if (isTokenValid !== isSuccess) {
      setIsTokenValid(isSuccess);
    }
  }, [isTokenValid, isSuccess]);

  // Content rendering based on loading, success, and error states
  let content = <></>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    // Render table with note data if the query is successful
    const { ids } = notes;

    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <table className="table table--notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th note__status">
              Username
            </th>
            <th scope="col" className="table__th note__created">
              Created
            </th>
            <th scope="col" className="table__th note__updated">
              Updated
            </th>
            <th scope="col" className="table__th note__title">
              Title
            </th>
            <th scope="col" className="table__th note__username">
              Owner
            </th>
            <th scope="col" className="table__th note__edit">
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

export default NotesList;
