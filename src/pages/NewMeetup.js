import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();
  const onAddMeetup = (data) => {
    console.log(data);
    fetch(
      "https://meetup-backend-62cbb-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>Add Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
    </section>
  );
}
export default NewMeetup;
