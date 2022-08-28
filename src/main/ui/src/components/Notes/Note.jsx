export default function Note({id, text, date}) {
    return (
        <div className='note'>
            <span>{text}</span>
            <small>{id}</small>
                <div className="footer">
                    <small>{date}</small>
                </div>
        </div>
    );
};
