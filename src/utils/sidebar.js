import Generic from "../components/Generic";
import Buttons from "../components/Buttons";

import HourImg from "../assets/img/process.png";
import CheckImg from "../assets/img/done.png";
import { Progress } from "../components/Progress";
import { Inputs } from "../components/Inputs";
import { Alert } from "../components/Alerts";
import { Badge } from "../components/Badges";
import { Checkbox } from "../components/Checkboxes";
import { Dropdown } from "../components/Dropdowns";
import { Table } from "../components/Table";
import { Tooltip } from "../components/Tooltips";
import { Switch } from "../components/Switchs";
import {Carousel} from "../components/Carousels"

export const sidebar = [
  {
    id: 1,
    title: "Buttons",
    path: "/components/buttons",
    element: <Buttons />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 2,
    title: "Inputs",
    path: "/components/inputs",
    element: <Inputs />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 3,
    title: "Dropdown",
    path: "/components/dropdown",
    element: <Dropdown />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 4,
    title: "Tooltip",
    path: "/components/tooltip",
    element: <Tooltip />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 5,
    title: "Checkbox",
    path: "/components/checkbox",
    element: <Checkbox />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 6,
    title: "Switch",
    path: "/components/switch",
    element: <Switch />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 7,
    title: "Badge",
    path: "/components/badge",
    element: <Badge />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 8,
    title: "Carousel",
    path: "/components/carousel",
    element: <Carousel />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },

  {
    id: 9,
    title: "Table",
    path: "/components/table",
    element: <Table />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 10,
    title: "Progress",
    path: "/components/progress",
    element: <Progress />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 11,
    title: "Alert",
    path: "/components/alert",
    element: <Alert />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: true,
  },
  {
    id: 12,
    title: "Menu",
    path: "/components/menu",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 13,
    title: "Steps",
    path: "/components/steps",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 14,
    title: "Calendar",
    path: "/components/calendar",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 15,
    title: "Maps",
    path: "/components/maps",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 16,
    title: "Charts",
    path: "/components/charts",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  
  {
    id: 17,
    title: "Forms",
    path: "/components/forms",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 18,
    title: "DatePicker",
    path: "/components/datepicker",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
 
  {
    id: 19,
    title: "Transfer",
    path: "/components/transfer",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  },
  {
    id: 20,
    title: "Upload",
    path: "/components/upload",
    element: <Generic />,
    imgHour: HourImg,
    imgCheck: CheckImg,
    fulfilled: false,
  }];
  