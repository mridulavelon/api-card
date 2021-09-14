import React from 'react';
import PropTypes from 'prop-types';

GetList.propTypes = {
    jobList : PropTypes.array,
};

GetList.defaultProps = {
    jobList : [],
};

function GetList(props) {
    const { jobList } = props;
    return (
        <div style={{
            backgroundColor: "grey",
            margin: "10px",
            padding: "15px",
            width: "150px"
          }}
          >
            {jobList.map(job => (
                <h2 key = {job.id}>{job.title}
                 <p>{job.category} </p>
                </h2>
            ))}
        </div>
    );
}

export default GetList;
