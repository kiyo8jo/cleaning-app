import { FaCheckCircle, FaKey } from "react-icons/fa";
import styles from "./FrontMain.module.css";

interface Room {
  roomNumber: number;
  roomType: string;
  cleaningType: string;
  nowBeds: number;
  newBeds: number;
  adult: number;
  inf: number;
  kidInf: number;
}

const FrontMain = () => {
  const testRooms: Room[] = [
    {
      roomNumber: 221,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
    {
      roomNumber: 223,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
    {
      roomNumber: 224,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
    {
      roomNumber: 225,
      roomType: "OTP",
      cleaningType: "OUT",
      nowBeds: 3,
      newBeds: 3,
      adult: 2,
      inf: 1,
      kidInf: 0,
    },
  ];
  return (
    <main className={styles.main_wrapper}>
      {testRooms.map((room) => (
        <div className={styles.room_card} key={room.roomNumber}>
          <div className={styles.room_card_header}>
            <div>{`${room.roomNumber}(${room.roomType})`}</div>
            <div>{room.cleaningType}</div>
          </div>
          <div className={styles.room_card_contents}>
            <div className={styles.key_icon}>
              <FaKey />
            </div>
            <div className={styles.check_icon}>
              <FaCheckCircle />
            </div>
          </div>
          <div className={styles.room_card_footer}>
            <div className={styles.left_container}>
              <div className={styles.beds_container}>
                <p className={styles.label}>Beds</p>
                <p>{`${room.nowBeds}→${room.newBeds}`}</p>
              </div>
              <div className={styles.guests_container}>
                <p className={styles.label}>Guests</p>
                <p>{`${room.adult}/${room.inf}/${room.kidInf}`}</p>
              </div>
            </div>
            <div className={styles.right_container}>
              <p className={styles.label}>Memo</p>
              <p>roomMemo</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default FrontMain;
