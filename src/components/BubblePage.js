import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';

import { useParams, useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = (props) => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const { id } = props.match.params
  const { push } = useHistory()

  useEffect(() => {
    axiosWithAuth().get('/colors')
      .then(res => {
        setColors(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const toggleEdit = (value) => {
    setEditing({
      ...colors,
      value: true
    });
  };

  const saveEdit = (editColor) => {
    axiosWithAuth().put(`/colors/${id}`, colors)
      .then(res=> {
        editColor(res.data)
        push(`/colors/${id}`)
      })
      .catch(err => {
        console.log(err)
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${id}`)
      .then(res => {
        setColors(res.data)
        push('bubble-page')
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
