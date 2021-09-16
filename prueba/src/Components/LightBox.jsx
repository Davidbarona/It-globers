import '../Styles/LightBox.scss'

export const LightBox = ({mensajes}) => {

  return (
    <>
      <div className="lightBox">
        <h1 className="lightBox">{mensajes}</h1>
      </div>
    </>
  );
};
