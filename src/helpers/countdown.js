import moment from 'moment'
import momentDurationFormatSetup from "moment-duration-format";

export const countdown = () => {

  momentDurationFormatSetup(moment);

  const endDate = moment('2021-01-27');
  const now = moment();
  const diffTime = endDate.diff(now) ;
  const tempTime = moment.duration(diffTime).format("d:HH:mm:ss");
  const time = {
    days: tempTime.split(":")[0],
    hours: tempTime.split(":")[1],
    minuts: tempTime.split(":")[2],
    seconds: tempTime.split(":")[3],
  }

  return time;
}
