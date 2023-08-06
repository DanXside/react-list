import React from "react";
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/Input';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                placeholder="Search post"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <hr style={{margin: '15px 0'}}/>
            <MySelect 
                defaultValue="Сортировка"
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                value={filter.sort}
                options={[
                {value: 'title', name: 'По названию'},
                {value: 'descr', name: 'По описанию'}
                ]}
            />
        </div>
    );
}

export default PostFilter;