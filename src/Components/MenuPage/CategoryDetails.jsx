import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleCategory from './SingleCategory';
import styles from "./CategoryDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
/* import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearchHeartFill } from "react-icons/bs"; */

import { getDataRequest, getDataSuccess, getDataFailure } from "../../Redux/actionCreator";

const CategoryDetails = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    /* const data = useSelector((store) => {
        return store.reducer.data;
    }) */

    useEffect(() => {
        dispatch(getDataRequest());
        console.log(category);
        axios.get(`http://localhost:8000/items/CategoryDetails/${category}`, { headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}` 
        }})
            .then((res) => {
                dispatch(getDataSuccess(res.data));
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                dispatch(getDataFailure());
                console.log(err);
            })
    },[])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input className={styles.searchBar} type="text" placeholder="Search food" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className={styles.items}>
                {
                    data.length > 0 && data.filter((item) => {
                        return search.toLowerCase() === ""
                            ? item
                            : item.name.toLowerCase().includes(search)
                    }).map((ele, i) => {
                        return (
                            <SingleCategory key={i}
                                id={ele.id}
                                image={ele.image}
                                name={ele.name}
                                category={ele.category}
                                price={ele.price}
                                desc={ele.desc}
                                weight={ele.weight} />
                        )

                    })
                }
            </div>
        </div>
    )
}
export default CategoryDetails;
