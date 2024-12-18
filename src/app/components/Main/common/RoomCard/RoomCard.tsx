import { FaCheckCircle, FaKey, FaStopCircle } from "react-icons/fa";
import { Room } from "@/app/types/types";
import styles from "./RoomCard.module.css";

interface Props {
  room: Room;
}

const RoomCard = ({ room }: Props) => {
  return (
    <div
      className={`${styles.room_card} ${
        (room.stayCleaningType === "NORMAL" && styles[room.stayCleaningType]) ||
        (room.cleaningType && styles[room.cleaningType])
      }`}
      key={room.roomNumber}
    >
      <div className={styles.room_card_header}>
        <div>{`${room.roomNumber}(${room.roomType})`}</div>
        <div>{room.cleaningType}</div>
      </div>
      <div className={styles.room_card_contents}>
        <div className={styles.key_icon}>
          {room.isKeyBack && <FaKey color="green" />}
        </div>
        <div className={styles.check_icon}>
          {room.isWaitingCheck && !room.isCleaningComplete && (
            <FaStopCircle color="black" />
          )}
          {room.isCleaningComplete && <FaCheckCircle color="blue" />}
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
          <p className={styles.memo}>{room.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
