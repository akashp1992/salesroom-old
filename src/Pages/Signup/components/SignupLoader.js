import React from "react";
import ClipLoader from "react-spinners/BeatLoader";
import PropTypes from 'prop-types';

const SignupLoader = ({ bool }) => {
    return (
        <div className="sweet-loading" style={{ marginTop: '1px' }}>
            <ClipLoader size={5} color={"white"} loading={bool} />
        </div>
    )
}
SignupLoader.propTypes = {
    isLoading: PropTypes.bool
}
export default SignupLoader;