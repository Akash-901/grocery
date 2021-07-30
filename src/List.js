import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

function List({ items, removeItem, editItem }) {
    return (
        <div className="list-items">
            {
                items.map((listitem) => {
                    const { id, title } = listitem
                    return (
                        <article className="allitems" key={id}>
                            <p className="title">{title}</p>
                            <div className="btn-container">
                                <button
                                    type="button"
                                    className="edit-btn"
                                    onClick={() => editItem(id)}>
                                    <FaEdit />
                                </button>
                                <button
                                    type="button"
                                    className="delete-btn"
                                    onClick={() => removeItem(id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default List;
