import Avatar from './avatar';
import Alert from './alert'
import PropTypes from 'prop-types';

function profile(props) {
    return (
        <div style={{
            padding:20, 
            maxWidth: 250,
            border: '1px solid rgba(0, 0, 0, 0.5)',
            borderRadius: 8,
            margin: 20
            }}>
        <Avatar path={props.image}/>
        <p>{props.fullName}</p>
        <p>{props.bio}</p>
        <p>{props.profession}</p>
       <Alert name={props.fullName} />
        </div>
    );
}

profile.defaultProps = {
    profession: 'Web Dev' 
  };

  profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};

export default profile;