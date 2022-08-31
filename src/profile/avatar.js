function avatar(props) {
    return (
        <>
        <div className="avatar" >
            <img src={props.path} style={{maxWidth: 50}} ></img>
        </div></>
      );
}

export default avatar;