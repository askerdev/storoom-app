import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import updateLocale from "dayjs/plugin/updateLocale";
import localeData from "dayjs/plugin/localeData";
import ruLocale from "dayjs/locale/ru";

dayjs.extend(utc);
dayjs.extend(weekOfYear);
dayjs.extend(updateLocale);
dayjs.extend(localeData);
dayjs.locale(ruLocale);
