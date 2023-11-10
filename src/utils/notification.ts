import { notification } from "antd";
import {
  IconType,
  NotificationPlacement,
} from "antd/es/notification/interface";

const Notification = (
  placement: NotificationPlacement,
  type: IconType,
  message: string,
  description: string,
  duration: number,
) => {
  notification.open({
    message,
    description,
    placement,
    type,
    duration,
  });
};

export default Notification;
