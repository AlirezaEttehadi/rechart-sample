export type WeekDaysModel =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type ItemModel = {
  day: WeekDaysModel;
  value: number;
};

export type InstallsModel = ItemModel[];

export type RevenueModel = ItemModel[];

export type OverViewModel = {
  installs: InstallsModel;
  revenue: RevenueModel;
};

export type CampaignItemModel = {
  id: string;
  name: string;
  installs: InstallsModel;
};
export type CampaignsModel = CampaignItemModel[];
