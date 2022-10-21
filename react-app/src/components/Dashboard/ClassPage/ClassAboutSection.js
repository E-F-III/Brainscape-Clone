import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import './ClassPage.css'

function AboutSection() {
    const { classId } = useParams;

    const singleClass = useSelector(state => state.classes[Number(classId)])

    return

}
