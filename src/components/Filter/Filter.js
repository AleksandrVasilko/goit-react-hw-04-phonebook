import React from "react"
import s from './Filter.module.css'

const Filter = ({value, onChange}) => (
    <label >
        <p className={s.filterTitle}>Find contacts by name</p> <input type="text" value={value} onChange={onChange} className={s.filterInput}/>
    </label>
)

export default Filter;
