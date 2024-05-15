import './note_form.css';
import React, { useState } from 'react';
import CategoryDropdown from './categoryDropdown';

function NoteForm({ addArticle, archives }) {
    const [author, setAuthor] = useState('');
    const [header, setHeader] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const onChangeAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const onChangeHeader = (e) => {
        setHeader(e.target.value);
    };

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const handleAddArticle = () => {
        const newArticle = {
            author: author,
            header: header,
            content: content,
        };
        addArticle(newArticle); 
        setAuthor('');
        setHeader('');
        setContent('');
    };


    return (
        <div className='note_form_wrapper'>
            <div className='main_col'>
                <h1 id='head_form_title'>
                    Создать запись
                </h1>
                <hr />
                <p>Автор</p>
                <input
                    type="text"
                    value={author}
                    onChange={onChangeAuthor}
                    placeholder="Введите автора..."
                    className="custom-input" 
                />
                <p>Заголовок</p>
                <input
                    type="text"
                    value={header}
                    onChange={onChangeHeader}
                    placeholder="Введите заголовок..."
                    className="header-input" 
                />
                <p>Категория</p>
                <CategoryDropdown category={category} setCategory={setCategory} />
                <p>Содержание</p>
                <textarea
                    value={content}
                    onChange={onChangeContent}
                    placeholder="Введите содержание..."
                    className='content-input' 
                    rows="5"
                ></textarea>
                <button onClick={handleAddArticle}>Добавить статью</button>
                <h1 id='head_form_title'>
                    Архив
                </h1>
                <hr />
                <div className="archive">
                    <ul className="black-ol">
                        {archives.map((archive, index) => (
                            <li key={index}>{archive.header}</li>
                        ))}
                    </ul>
                </div>

            </div>
            
        </div>
    );
}

export default NoteForm;
