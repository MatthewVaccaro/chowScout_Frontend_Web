function EmailNotification({status}) {
    const messages = [ "👍 You're added to the list!", "👎 Opps! Something went wrong" ]
    return (
        <div className="bg-black shadow-md inline-flex rounded-md" >
            <div className={`${ status === 'good' ? 'bg-green ': 'bg-red' } w-3 md:w-2 rounded-l-md`} />
            <h4 className=" text-white py-2 px-4 whitespace-nowrap"> { status === 'good' ? messages[0] : messages[1] } </h4> 
        </div>
    )
}

export default EmailNotification
