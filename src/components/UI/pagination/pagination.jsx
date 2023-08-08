import React from "react";
import { getPagesArr } from "../../utils/page";
import MyButton from "../button/Button";

export const Pagination = ({totalPages, changePage}) => {
    let pagesArr = getPagesArr(totalPages);
    return (
        <div style={{display: 'flex', gap: '10', marginTop: '20'}}>
            {
            pagesArr.map((p) => <MyButton onClick={() => changePage(p)} key={p}>{p}</MyButton>)
            }
        </div>
    )
}