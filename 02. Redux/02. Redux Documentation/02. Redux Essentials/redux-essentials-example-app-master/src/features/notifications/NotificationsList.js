import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDistanceToNow, parseISO } from 'date-fns';
import classnames from 'classnames';

import { selectAllUsers } from '../users/usersSlice';
import {
  useGetNotificationsQuery,
  allNotificationsRead,
  selectMetadataEntities,
} from './notificationsSlice';

export const NotificationsList = () => {
  const dispatch = useDispatch();
  const { data: notifications = [] } = useGetNotificationsQuery();
  const notificationsMetadata = useSelector(selectMetadataEntities);
  const users = useSelector(selectAllUsers);

  useLayoutEffect(() => {
    dispatch(allNotificationsRead());
  });

  const renderedNotifications = notifications.map((notification) => {
    const date = parseISO(notification.date);
    const timeAgo = formatDistanceToNow(date);
    const user = users.find((user) => user.id === notification.user) || {
      name: 'Unknown user',
    };

    const metadata = notificationsMetadata[notification.id];

    const notificationClassName = classnames('notification', {
      new: metadata.isNew,
    });

    return (
      <div key={notification.id} className={notificationClassName}>
        <div>
          <b>{user.name}</b> {notification.message}
        </div>
        <div title={notification.date}>
          <i>{timeAgo} ago</i>
        </div>
      </div>
    );
  });

  return (
    <section className="notificationList">
      <h2>Notifications</h2>
      {renderedNotifications}
    </section>
  );
};
