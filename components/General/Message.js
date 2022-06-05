const Message = ({body = "A simple warning alert—check it out!"}) => {
    return (
        <div className="alert alert-warning" role="alert">
            {JSON.stringify(body)}
        </div>
    );
};

export default Message;
