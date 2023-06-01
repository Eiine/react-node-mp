const Item = (props) => {
    return (
        <div className='flex items-center gap-2 mt-10 pl-8 pr-11 mb-12 cursor-pointer'>
            <div>
                <img src={props.icon} />
            </div>
            <div className='flex justify-between w-full items-center'>
                <div>
                    <h2 className='font-semibold text-base leading-5'>{props.title}</h2>
                    <p className='font-medium text-sm leading-[17px]'>{props.description}</p>
                </div>
                <div className="m-4">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.247355 11.7527C0.0885389 11.5703 0.00619254 11.3586 0.000316349 11.1174C-0.00557749 10.8762 0.0767689 10.6704 0.247355 10.4998L4.72952 6.01763L0.2297 1.51784C0.070884 1.35903 -0.00557749 1.15021 0.000316349 0.891392C0.00619254 0.632592 0.0885389 0.423785 0.247355 0.264969C0.429694 0.0826302 0.63851 -0.00560101 0.873805 0.000275188C1.10908 0.00615138 1.31201 0.0943826 1.4826 0.264969L6.61765 5.40002C6.71176 5.49413 6.77794 5.59118 6.81617 5.69119C6.8544 5.79119 6.87351 5.9 6.87351 6.01763C6.87351 6.13528 6.8544 6.2441 6.81617 6.3441C6.77794 6.44409 6.71176 6.54114 6.61765 6.63527L1.50023 11.7527C1.32966 11.9233 1.12379 12.0056 0.882619 11.9997C0.641448 11.9938 0.429694 11.9115 0.247355 11.7527Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Item