import "./Info.css";
import Location from "../../../public/assets/Location.png";
import Phone from "../../../public/assets/phone.png";
import Time from "../../../public/assets/time.png";

function Info() {
  return (
    <div id="InfoDiv">

      <div className="InfoLines">
        <img src={Location} className="InfoPics" />
        <div className="InfoDetails">
          <label className="DetailsTitle">Address</label>
          <label className="AllDetails">
            236 5th SE Avenue, New York NY10000, United States
          </label>
        </div>
      </div>

      <div className="InfoLines">
        <img src={Phone} className="InfoPics" />
        <div className="InfoDetails">
          <label className="DetailsTitle">Phone</label>
          <label className="AllDetails">   Mobile: +(84) 546-6789     </label>
          <label className="AllDetails">   Hotline: +(84) 456-6789     </label>
        </div>
        </div>

        <div className="InfoLines">
        <img src={Time} className="InfoPics" />
        <div className="InfoDetails">
          <label className="DetailsTitle">Working Time</label>
          <label className="AllDetails">  Monday-Friday: 9:00 - 22:00  </label>
          <label className="AllDetails">   Saturday-Sunday: 9:00 - 21:00     </label>
        </div>
        </div>

    </div>
  );
}

export default Info;
