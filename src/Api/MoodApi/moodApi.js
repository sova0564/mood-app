import { getDatabase, ref, set } from "firebase/database";

// eslint-disable-next-line
export const addMood = (mood) => {
  const db = getDatabase();

  const newMood = push(ref(db, "moods"));
  set(newMood, {
    choiceOfMood: mood,
    completed: false,
  });
};

// eslint-disable-next-line
export const editMood = (selectedMoodId) => {
  const db = getDatabase();

  const moodRef = ref(db, `moods/${selectedMoodId}`);
  set(moodRef, { choiceOfMood: mood, completed: false });
};

// eslint-disable-next-line
export const deleteMood = (selectedMoodId, setMoods, moods) => {
  const db = getDatabase();
  const moodRef = ref(db, `moods/${selectedMoodId}`);
  set(moodRef, null);
  setMoods(moods.filter((mood) => mood.id !== selectedMoodId));
};
