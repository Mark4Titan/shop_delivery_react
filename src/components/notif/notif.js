import {
  ButtonNotif,
  ContentNotif,
  DivWraperNotif,
  TextNotif,
} from "./notif.styled";

const Notif = ({ setError, error }) => {
  const ClearNotif = () => {
    setError("");
  };

  setTimeout(() => {
    ClearNotif();
  }, 100000);

  return (
    error.length > 0 && (
      <DivWraperNotif>
        <ContentNotif>
          <TextNotif>{error}</TextNotif>
          <ButtonNotif onClick={() => ClearNotif()}>OK</ButtonNotif>
        </ContentNotif>
      </DivWraperNotif>
    )
  );
};
export default Notif;
