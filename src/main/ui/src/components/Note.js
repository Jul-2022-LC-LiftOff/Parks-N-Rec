const Note = ({id, text, date}) =>  {
    return <div className='note'>
        <span>{text}</span>
        <div className="footer">
            <small>{date}</small>
        </div>
    </div>
};

export default Note;