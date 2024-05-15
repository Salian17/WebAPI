import React from 'react';

function CategoryDropdown({ category, setCategory }) {
    const categories = ['Спорт', 'Технологи', 'Наука','Главное', 'Интересное', 'Шоу-Бизнес'];

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    return (
        <select value={category} onChange={onChangeCategory} className="custom-input">
            <option value="">Выберите категорию...</option>
            {categories.map((cat, index) => (
                <option key={index} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
}

export default CategoryDropdown;