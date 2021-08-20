import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axios from "axios";

import { useParams, useHistory } from "react-router-dom";

const BubblePage = (props) => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  const { id } = useParams()
  const { push } = useHistory()

  useEffect(() => {
    axios.get('http://localhost:5000/api/colors')
      .then(res => {
        setColors(res.data.colors)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const toggleEdit = (value) => {
    setEditing({
      ...colors,
      [value.target.name]:value.target.value
    });
  };

  const saveEdit = (editColor) => {
    axios.put(`http://localhost:5000/api/colors/${id}`)
      .then(res=> {
        props.setColors(res.data)
        push(`/colors/${id}`)
      })
  };

  const deleteColor = (colorToDelete) => {
    axios.delete(`http://localhost:5000/api/colors/${id}`)
      .then(res => {
        setColors(res.data)
        push('bubble-page')
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
