"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Room } from "@/app/types/types";

import * as XLSX from "xlsx";

const CreateTablePage = () => {
  const [newRooms1f, setNewRooms1f] = useState<Room[] | null>(null);
  const [newRooms2f, setNewRooms2f] = useState<Room[] | null>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<Room[] | null>>
  ) => {
    if (e.target.files?.length) {
      const reader = new FileReader();

      reader.readAsArrayBuffer(e.target.files![0]);
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target!.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parseData: Room[] = XLSX.utils.sheet_to_json(sheet);
        setFunction(parseData);
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/room/createTable/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newRooms1f, newRooms2f }),
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_container}>
        <div className={styles.floor_input}>
          <label htmlFor="1F">1Fのデータを選択</label>
          <input
            id="1F"
            type="file"
            accept=".xlsx"
            onChange={(e) => handleFileUpload(e, setNewRooms1f)}
          />
        </div>
        <div className={styles.floor_input}>
          <label htmlFor="2F">2Fのデータを選択</label>
          <input
            id="2F"
            type="file"
            accept=".xlsx"
            onChange={(e) => handleFileUpload(e, setNewRooms2f)}
          />
        </div>
      </div>
      <form className={styles.form_container} onSubmit={handleSubmit}>
        <button>作成する</button>
      </form>
    </div>
  );
};

export default CreateTablePage;
