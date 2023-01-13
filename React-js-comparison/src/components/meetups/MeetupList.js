import MeetupItem from "./MeetupItem";
import "./MeetupList.css";

const MeetupList = ({ meetups }) => {
  return (
    <ul className="List">
      {meetups?.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
