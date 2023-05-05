import React, { useState } from 'react';

/**
 * variable used to store item as user types in the input field
 * local item state created
 */

const AddItemForm = ({ addItem }) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(item);
        setItem('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={item} onChange={(e) => setItem(e.target.value)} />
                <button>Add Item</button>
            </form>
        </div>
    );
};

export default AddItemForm;