import { FaCheckCircle, FaKey } from "react-icons/fa";
import styles from "./FrontRoomCard.module.css";

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

type Props = {
  room: Room;
};

const FrontRoomCard = ({ room }: Props) => {
  return (
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
  );
};

export default FrontRoomCard;
