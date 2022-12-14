import React from "react";
import PropTypes from "prop-types";

export const MyFunctionalComponent = ({
    id = "",
    name = "",
    className = ""
}) => {
    return <div>
        <h1>My Props:</h1>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Class: {className}</p>
    </div>
}

MyFunctionalComponent.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    age: PropTypes.number
}