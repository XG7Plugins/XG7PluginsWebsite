export type NotificationType = "SUCCESS" | "ALERT" | "ERROR" | "INFO"

export type NotificationMessage = {
  message: string;
  type: NotificationType;
}
