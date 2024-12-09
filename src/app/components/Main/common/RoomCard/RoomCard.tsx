import { FaCheckCircle, FaKey } from "react-icons/fa";
import styles from "./RoomCard.module.css";
import { Room } from "@/app/types/types";

interface Props {
  room: Room;
}

const RoomCard = ({ room }: Props) => {
  return (
    <div
      className={`${styles.room_card} ${
        room.cleaningType ? styles[room.cleaningType] : ""
      }`}
      key={room.roomNumber}
    >
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
          <p>{room.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
